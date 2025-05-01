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
            Multidisciplinary designer focused on branding & web design/dev 
          </p>
          <p>Started as a Frontend Developer at 14 with experience in the startup world. I discovered where design could lead me, and since then I've worked in different areas of design, graphics, fashion, advertising, branding while continuing to evolve my coding skills, bringing the best of both worlds into projects across different industries.</p>
        </div>
        <div className={styles.contact}>
          <a href="mailto:sam@samvarcia.com">EMAIL</a>
          <a href="https://twitter.com/samvarcia" target="_blank">
            X/TWITTER
          </a>
          <a href="https://www.instagram.com/samvarcia/" target="_blank">
            INSTAGRAM
          </a>
        </div>
      </motion.div>
    </div>
  );
}
