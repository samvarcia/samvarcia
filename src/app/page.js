import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="/SAMVASIGN.svg"
        alt="samvarcia"
        width={400}
        height={100}
        priority
      />
    </main>
  );
}
