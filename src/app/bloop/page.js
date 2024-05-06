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
              <p>BLOOP --- Brand and Website Design</p>
          </div>
        </div>
      </div>
      <div className={styles.images}>
        <Image
          src={"/bloopsummary.png"}
          width={1400}
          height={787.5}
          quality={100}
          alt="Champain Brand"
          loading="lazy"
        />
      </div>
    </motion.section>
  );
}
