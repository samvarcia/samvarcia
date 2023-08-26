"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function Page() {
  return (
    <motion.section
      className={styles.project}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.projectCopy}>
        <div className={styles.projectCopyWrap}>
          <div className={styles.projectCopyTitle}>
            <div className={styles.projectCopyTitleDate}>
              <h1>ALL HEROES CREATE</h1>
            </div>
          </div>

          <div className={styles.details}>
            <div className={styles.tags}>
              <p>Year: 2023</p>
              <p>Type: Personal</p>
              <p>Graphic Design</p>
              <p>Poster Design</p>
              <p>Creative Direction</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.images}>
        <Image
          src={"/allheroescreatesummary.png"}
          width={1400}
          height={787.5}
          quality={100}
          alt="All HEROES CREATE"
          priority={true}
        />
      </div>
    </motion.section>
  );
}
