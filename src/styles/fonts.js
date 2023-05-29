import { Roboto_Mono, Roboto_Flex } from "next/font/google";

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
  adjustFontFallback: false,
});
export const roboto_flex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
  display: "swap",
  adjustFontFallback: false,
});
