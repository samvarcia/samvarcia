"use client";
import styles from "./Menu.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();
  const className = pathname === "/about" ? "menuwrap2" : "menuwrap";

  return (
    <div className={styles[className]}>
      {className === "menuwrap2" ? (
        <Link href="/" className={styles.logoLink}>
          <img 
            src="https://6q3qtzvyuz.ufs.sh/f/QrkWx2FyjA3ZfgJClUIecQbx6walmhsiKN5vWIDfqU803tAL" 
            alt="Samvarcia"
            className={styles.logo}
          />
        </Link>
      ) : (
        <nav className={styles.menu}>
          <Link href="/" className={styles.logoLink}>
            <img 
              src="https://6q3qtzvyuz.ufs.sh/f/QrkWx2FyjA3ZfgJClUIecQbx6walmhsiKN5vWIDfqU803tAL" 
              alt="Samvarcia"
              className={styles.logo}
            />
          </Link>
          <div className={styles.menuText}>
            <p>Multidisciplinary designer and Fronted developer</p>
            <Link href="/about" className={styles.aboutLink}>
              <p>About & Contact</p>
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}