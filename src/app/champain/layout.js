import styles from "./styles.module.css";
import Menu from "../components/Menu";
import Header from "../components/Header";
const pages = [
  { path: "/wm" },
  { path: "/bloop" },
  { path: "/wtc" },
  { path: "/saikoro" },
  { path: "/aex" },
  { path: "/allheroescreate" },
  { path: "/glow" },
  { path: "/icarus" },
  { path: "/bn" },
  { path: "/thinkmore" },
];
export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <div>
      <section className={styles.about}>
        <Header pages={pages} />
        {children}
        <Menu />
      </section>
    </div>
  );
}
