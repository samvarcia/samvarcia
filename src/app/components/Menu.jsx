import styles from "./Menu.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  return (
    <div className={styles.menuwrap}>
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
