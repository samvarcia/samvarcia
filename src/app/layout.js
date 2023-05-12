import "./globals.css";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "SAMVARCIA",
  description: `SAMUEL GARCIA - (AKA SAMVARCIA - 2004 - BOGOTA)
  OBSESSED WITH CREATING. EXPERIENCE IN STARTUPS, WEB, 
  PRODUCT, BRANDS, GRAPHICS AND DESIGN IN GENERAL. 
  FOCUSED ON BRINGING 10 STAR EXPERIENCES TO THE WORLD. 
  LOVE FOR FASHION, MUSIC AND FILM.`,
  themeColor: "#F2F0EC",
  openGraph: {
    images: [
      {
        url: "https://www.samvarcia.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    title: "SAMVARCIA",
    description:
      "OBSESSED WITH CREATING. EXPERIENCE IN STARTUPS, WEB, PRODUCT, BRANDS, GRAPHICS AND DESIGN IN GENERAL. FOCUSED ON BRINGING 10 STAR EXPERIENCES TO THE WORLD. LOVE FOR FASHION, MUSIC AND FILM.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAMVARCIA.COM",
    description:
      "OBSESSED WITH CREATING. EXPERIENCE IN STARTUPS, WEB, PRODUCT, BRANDS, GRAPHICS AND DESIGN IN GENERAL. FOCUSED ON BRINGING 10 STAR EXPERIENCES TO THE WORLD. LOVE FOR FASHION, MUSIC AND FILM.",
    site: "@samvarcia",
    images: ["https://www.samvarcia.com/og-image.png"],
  },
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
