import { Roboto } from "next/font/google";
import "./globals.css";
// import AuthContextProvider from "@/context/AuthContext";

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
