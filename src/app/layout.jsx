import { Roboto } from "next/font/google";
import "./globals.css";
import AuthContextProvider from "../context/AuthContext";
import Navbar from "@/components/shared/NavBar/nav";
import Footer from "@/components/shared/Footer";

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
      <AuthContextProvider>
        <body
          style={inter.style}
          className={`${inter.className} flex w-full h-full overflow-y-scroll flex-col`}
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </AuthContextProvider>
    </html>
  );
}
