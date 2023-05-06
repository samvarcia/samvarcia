import "./globals.css";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "SAMVARCIA",
  description: "SAMVARCIA - Samuel Garcia Portfolio",
  themeColor: "#F2F0EC",
};

const helvetica = localFont({
  src: [
    {
      path: "./font/HelveticaNowText-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./font/HelveticaNowText-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={helvetica.className}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
