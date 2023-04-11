"use client";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import Menu from "./components/Menu";
import Flow from "./components/Flow";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <main className={styles.main}>
        <Flow />
        <Menu />
      </main>
    </motion.div>
  );
}
