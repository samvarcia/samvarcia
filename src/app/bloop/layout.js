import styles from "./styles.module.css";
import Menu from "../components/Menu";
import localFont from "next/dist/compiled/@next/font/dist/local";

// export const metadata = {
//   title: "SAMVARCIA",
//   description: "SAMVARCIA - Samuel Garcia Portfolio",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={styles.about}>{children}</body>
//     </html>
//   );
// }

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <div>
      <section className={styles.about}>
        {children}
        <Menu />
      </section>
    </div>
  );
}
