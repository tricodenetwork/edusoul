import { Roboto } from "next/font/google";
import "./globals.css";
// import AuthContextProvider from "../context/AuthContext";
import Navbar from "@/components/shared/NavBar/nav";
import Footer from "@/components/shared/Footer";
import { Toaster } from "react-hot-toast";
import NextAuthSessionProvider from "@/context/SessionProvider";
import AuthContextProvider from "@/context/AuthContext";

const inter = Roboto({
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
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
            <Toaster position='top-center' />
            <Navbar />
            {children}
            <Footer />
          </AuthContextProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
