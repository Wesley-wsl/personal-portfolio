import localFont from "next/font/local";

export const PitFont = localFont({
  src: [
    {
      path: "../../../public/fonts/Pit-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Pit-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Pit-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
