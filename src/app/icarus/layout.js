import styles from "./styles.module.css";
import Menu from "../components/Menu";

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
