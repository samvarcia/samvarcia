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
    "https://utfs.io/f/QrkWx2FyjA3ZBPWpkqla6fVuz58qR1kO7rLhUYpTI9axjgbc",
    "https://utfs.io/f/QrkWx2FyjA3ZFgVSrBIoaiXdqm9LnwZYNuES2gotCBxRVU0I",
    "https://utfs.io/f/QrkWx2FyjA3Z5O6qTwrsxEn13oaTjFzPRl7XrSgwuDLZiH0Q",
    "https://utfs.io/f/QrkWx2FyjA3ZUD42OWLRNaXMPTp1mdr79VfSOABUE4qZKHei",
    "https://utfs.io/f/QrkWx2FyjA3ZbTeN7Xn0RrXaSTf5vnwyFM2eQc3WEjdmpD7k",
    "https://utfs.io/f/QrkWx2FyjA3Z462c7o51WkPLHQKXFNZamtp76wciY0d2JRCr",
    "https://utfs.io/f/QrkWx2FyjA3ZTGrU7ms3MaC3xVm9dseWkOnu52FiItyo1bwg",
    "https://utfs.io/f/QrkWx2FyjA3ZooCRAHVjIkzwtVSLlCDpiT7MnPNqsG9uefmY",
    "https://utfs.io/f/QrkWx2FyjA3Zn7EvJmfJtlKdSQUsFRcHgDqa2OeMiZf9WXmE",
    "https://utfs.io/f/QrkWx2FyjA3ZdbZmhdPNnb9WylKgp1UjB6vrcsa075eXLPzV",
    "https://utfs.io/f/QrkWx2FyjA3Z5SzCinrsxEn13oaTjFzPRl7XrSgwuDLZiH0Q",
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
