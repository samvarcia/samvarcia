"use client";
import styles from "./Menu.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();
  const className = pathname === "/about" ? "menuwrap2" : "menuwrap";

  return (
    <div className={styles[className]}>
      <div className={styles.menu}>
        <Link href={"/"}>
          <Image
            src="/SAMVASIGN.svg"
            alt="samvarcia"
            width={250}
            height={62.58}
            priority
          />
        </Link>
        <Link href={"/about"}>
          <h1>ABOUT</h1>
        </Link>
      </div>
    </div>
  );
}
