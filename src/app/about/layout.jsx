import styles from "./about.module.css";

export const metadata = {
  title: "SAMVARCIA",
  description: "SAMVARCIA - Samuel Garcia Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.about}>{children}</body>
    </html>
  );
}
