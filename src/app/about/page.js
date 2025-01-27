"use client";

import Image from "next/image";
import styles from "./about.module.css";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className={styles.aboutContainer}>
      <motion.div
        className={styles.aboutContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className={styles.aboutText}>
          <h1>SAMUEL GARCIA (AKA SAMVARCIA)</h1>

          <p>
          Throughout my life I have been influenced by great works of creativity. And that has become my purpose to be able to channel all my ideas, to do it in the highest way, no matter the area.
          </p>
        </div>
        <div className={styles.contact}>
          <a href="mailto:samvarcia@gmail.com">EMAIL</a>
          <a href="https://twitter.com/samvarcia" target="_blank">
            TWITTER
          </a>
          <a href="https://www.instagram.com/samvarcia/" target="_blank">
            INSTAGRAM
          </a>
        </div>
      </motion.div>
    </div>
  );
}
