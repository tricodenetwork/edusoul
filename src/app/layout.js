import { Roboto } from "next/font/google";
import "./globals.css";
import AuthContextProvider from "@/context/AuthContext";
import Navbar from "@/components/shared/NavBar/nav";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Edusoul",
  description: "Christian Leadership at its peak",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <AuthContextProvider>
        <body className={`${inter.className} flex flex-col`}>
          <Navbar />
          {children}
        </body>
      </AuthContextProvider>
    </html>
  );
}
