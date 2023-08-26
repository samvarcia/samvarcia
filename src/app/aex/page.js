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
              <h1>ÆX</h1>
            </div>
          </div>

          <p className={styles.projectCopyDescription}>
            I discovered the 90s Nintendo’s camera and I was fascinated by the
            looks of those images, so I designed this android prototype to
            imitate the pixelated aesthetic of it providing the ability to
            customize colors and download images.
          </p>

          <div className={styles.details}>
            <div className={styles.tags}>
              <p>Year: 2023</p>
              <p>Type: Personal</p>
              <p>Web Design</p>
              <p>Creative Direction</p>
              <p>Brand</p>
              <p>UX/UI Design</p>
              <a
                href="https://aex.vercel.app"
                target="_blank"
                className={styles.projectCopyWebsite}
              >
                ÆX WEBSITE
              </a>
            </div>
          </div>
        </div>
        <div className={styles.images}>
          <Image
            src={"/aexsummary.png"}
            width={1400}
            height={787.5}
            quality={100}
            alt="AEX"
            priority={true}
          />
          <Image
            src={"/aex.gif"}
            width={1400}
            height={787.5}
            quality={100}
            alt="AEX"
            priority={true}
          />
        </div>
      </div>
    </motion.section>
  );
}
