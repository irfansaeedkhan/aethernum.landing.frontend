import localFont from "next/font/local";

// Kanit Font
export const kanit = localFont({
  src: "../public/fonts/kanit/Kanit-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-kanit",
});

// Nexa Font Regular
export const nexaRegular = localFont({
  src: "../public/fonts/nexa/Nexa-Regular.otf",
  weight: "400",
  style: "normal",
  variable: "--font-nexa-regular",
});

// Nexa Font Light
export const nexaLight = localFont({
  src: "../public/fonts/nexa/Nexa-Light.otf",
  weight: "100",
  style: "normal",
  variable: "--font-nexa-light",
});
// Nexa Font Heavy
export const nexaHeavy = localFont({
  src: "../public/fonts/nexa/Nexa-Heavy.otf",
  weight: "900",
  style: "normal",
  variable: "--font-nexa-heavy",
});

// causten 400
export const caustenRegular = localFont({
  src: "../public/fonts/causten/Causten-Regular.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-causten-regular",
  display: "swap",
  preload: true,
});

// causten 700
export const caustenBold = localFont({
  src: "../public/fonts/causten/Causten-Bold.woff2",
  weight: "700",
  style: "normal",
  variable: "--font-causten-bold",
  display: "swap",
  preload: true,
});
