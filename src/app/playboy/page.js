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
              <p>PLAYBOY TSHIRT --- Product Design</p>
          </div>

        </div>
      </div>
      <div className={styles.images}>
        <Image
          src={"/playboy.png"}
          width={1400}
          height={787.5}
          quality={100}
          alt="Playboy tshirt"
          loading="lazy"   
          />
        <Image
          src={"/PLAYBOYTEE.png"}
          width={1400}
          height={787.5}
          quality={100}
          alt="Playboy tshirt colorways"
          loading="lazy"   
          />
      </div>
    </motion.section>
  );
}
