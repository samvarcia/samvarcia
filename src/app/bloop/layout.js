import styles from "./styles.module.css";
import Menu from "../components/Menu";
import Header from "../components/Header";

const pages = [
  { path: "/wm" },
  { path: "/champain" },
  { path: "/wtc" },
  { path: "/hunter" },
  { path: "/thecircle" },
  { path: "/bloop" },
  { path: "/playboy" },
  { path: "/allheroescreate" },
  { path: "/glow" },
  { path: "/wallet" },
  { path: "/glue" },
  { path: "/wingz" },
  { path: "/victoriansam" },
  { path: "/trust" },
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
