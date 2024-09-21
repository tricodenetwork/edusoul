// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FaceBookProvider from "next-auth/providers/facebook";
import LinkedInProvider from "next-auth/providers/linkedin";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import CredentialsProvider from "next-auth/providers/credentials";
import { baseUrl } from "@/config/config";

const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // console.log(credentials);
        // Your authentication logic here
        const { email, password } = credentials;
        const res = await fetch(`${baseUrl}api/login`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();
        console.log(user);
        // If authentication is successful, return user data
        if (res.ok && user) {
          return user;
        }

        // Return null if authentication fails
        return null;
      },
    }),
    FaceBookProvider({
      // secret: process.env.SECRET,
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      checks: "both",
    }),
    LinkedInProvider({
      clientId: process.env.LINKED_IN_ID,
      clientSecret: process.env.LINKED_IN_SECRET,
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    // async redirect({ url, baseUrl }) {
    //   return `${baseUrl}/menu/dashboard`;
    // },
    async jwt({ token, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin

      // console.log("jwt-user", user);
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token, user }) {
      // console.log("user", user);
      if (user) {
        session.user.role = user.role;
      }

      return session;
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
