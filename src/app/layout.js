import "./globals.css";
import localFont from "next/font/local";

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
      style: "normal",
    },
  ],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={helvetica.className}>
      <body>{children}</body>
    </html>
  );
}
