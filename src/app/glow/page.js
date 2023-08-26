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
              <h1>Glow</h1>
            </div>
          </div>

          <p className={styles.projectCopyDescription}>
            I love beautiful things, James Turrell's work and 3D design. So, I
            created a lamp concept that comes in four colors. I wanted to make
            it look soft and gentle.
          </p>
          <div className={styles.details}>
            <div className={styles.tags}>
              <p>Year: 2022</p>
              <p>Type: Personal</p>
              <p>3D Modeling</p>
              <p>Creative Direction</p>
              <p>Brand</p>
            </div>
          </div>
        </div>
        <div className={styles.images}>
          <Image
            src={"/glowsummary1.png"}
            width={1400}
            height={787.5}
            quality={100}
            alt="Glow"
            priority={true}
          />
          <Image
            src={"/glowsummary2.png"}
            width={1400}
            height={787.5}
            quality={100}
            alt="Glow"
            priority={true}
          />
          <Image
            src={"/greenlamp.gif"}
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
