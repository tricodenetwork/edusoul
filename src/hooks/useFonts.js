import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

const useFonts = () => {
  return { nunito };
};

export default useFonts;
