"use client";

import Image from "next/image";
import styles from "./about.module.css";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <h1>
          SAMUEL GARCIA (AKA SAMVARCIA - 2004 - BOGOTÁ) <br /> <br /> OBSESSED
          WITH CREATING. EXPERIENCE IN STARTUPS, WEB, PRODUCT, BRANDS, GRAPHICS
          AND DESIGN IN GENERAL. FOCUSED ON BRINGING 10 STAR EXPERIENCES TO THE
          WORLD.
        </h1>
        <div className={styles.contact}>
          <a href="mailto:samvarcia@gmail.com">EMAIL</a>
          <a href="https://twitter.com/samvarcia" target="_blank">
            TWITTER
          </a>
          <a href="https://www.instagram.com/samvarcia/" target="_blank">
            INSTAGRAM
          </a>
        </div>
      </div>
    </div>
  );
}
