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
              <h1>Sa!koro Website</h1>
            </div>
          </div>

          <p className={styles.projectCopyDescription}>
            Teaming up with the musical artist Sa!koro we created his first
            website, inspired by the Y2K aesthetic, pale colors and diamond trap
            culture. Our goal was to showcase his unique style, personality, and
            musical journey over time.
          </p>

          <div className={styles.details}>
            <div className={styles.tags}>
              <p>Year: 2023</p>
              <p>Type: Client</p>
              <p>Web Design</p>
              <p>Creative Direction</p>
              <a
                href="https://www.saikorito.com/"
                target="_blank"
                className={styles.projectCopyWebsite}
              >
                saikorito.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.images}>
        <Image
          src={"/saikorosummary.png"}
          width={1400}
          height={787.5}
          quality={100}
          alt="Saikoro"
          priority={true}
        />
      </div>
    </motion.section>
  );
}
