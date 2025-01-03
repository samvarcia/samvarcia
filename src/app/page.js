"use client";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import Menu from "./components/Menu";
import Collage from "./components/Collage";
import Flow from "./components/Flow";
import Gallery from "./components/Gallery";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const images = [
    "https://utfs.io/f/QrkWx2FyjA3ZtLESMexuh9ep2bZ43VafEOBTnkNi1CGlzgWr",
    "https://utfs.io/f/QrkWx2FyjA3ZtLESMexuh9ep2bZ43VafEOBTnkNi1CGlzgWr",
    "https://utfs.io/f/QrkWx2FyjA3ZtLESMexuh9ep2bZ43VafEOBTnkNi1CGlzgWr",
    "https://utfs.io/f/QrkWx2FyjA3ZtLESMexuh9ep2bZ43VafEOBTnkNi1CGlzgWr",
    "https://utfs.io/f/QrkWx2FyjA3ZtLESMexuh9ep2bZ43VafEOBTnkNi1CGlzgWr",
    "https://utfs.io/f/QrkWx2FyjA3ZtLESMexuh9ep2bZ43VafEOBTnkNi1CGlzgWr",
    "https://utfs.io/f/QrkWx2FyjA3ZtLESMexuh9ep2bZ43VafEOBTnkNi1CGlzgWr",
    "https://utfs.io/f/QrkWx2FyjA3ZtLESMexuh9ep2bZ43VafEOBTnkNi1CGlzgWr",
    "https://utfs.io/f/QrkWx2FyjA3ZtLESMexuh9ep2bZ43VafEOBTnkNi1CGlzgWr",
    "https://utfs.io/f/QrkWx2FyjA3ZtLESMexuh9ep2bZ43VafEOBTnkNi1CGlzgWr",
  ];
  return (
    <main className={styles.main}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
              {/* <ImageCarousel images={images} /> */}

          <Gallery images={images}/>
              {/* <Flow /> */}
        <Menu />
      </motion.div>
    </main>
  );
}
