import { Roboto } from "next/font/google";
import "./globals.css";
// import AuthContextProvider from "../context/AuthContext";
import Navbar from "@/components/shared/NavBar/nav";
import Footer from "@/components/shared/Footer";
import { Toaster } from "react-hot-toast";
import NextAuthSessionProvider from "@/context/SessionProvider";
import AuthContextProvider from "@/context/AuthContext";
import UserContextProvider from "@/context/UserContext";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  metadataBase: new URL("https://edusouldistinct.com"),
  title: "Edusoul",
  description: "Christian Leadership at its peak",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        style={inter.style}
        className={`${inter.className} flex w-full h-full overflow-y-scroll flex-col`}
      >
        <NextAuthSessionProvider>
          <AuthContextProvider>
            <UserContextProvider>
              <Toaster position='top-center' />
              <Navbar />
              {children}
              <Footer />
            </UserContextProvider>
          </AuthContextProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
