import "./globals.css";

export const metadata = {
  title: "SAMVARCIA",
  description: "SAMVARCIA - Samuel Garcia Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
