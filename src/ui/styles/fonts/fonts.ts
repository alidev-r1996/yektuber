import { Vazirmatn } from 'next/font/google';
import LocalFont from "next/font/local";

const VazirFont = LocalFont({
  src: [
    {
      path: "./Vazirmatn-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Vazirmatn-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Vazirmatn-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
});

export default VazirFont;
