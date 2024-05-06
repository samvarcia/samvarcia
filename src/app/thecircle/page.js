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
              <p>THE CIRCLE --- Brand Design</p>
          </div>
{/* 
          <p className={styles.projectCopyDescription}>
            Inspired by the website and branding of the{" "}
            <a
              className={styles.link}
              href="https://whakandmo.com/"
              target="_blank"
            >
              Whak&Mo
            </a>{" "}
            twins, I designed this logo that continues the aesthetic line of
            flipping existing logos in pop culture, this collaboration led to
            the creation of a keychain for their brand, check out their work!
          </p>

          <div className={styles.details}>
            <div className={styles.tags}>
              <p>Year: 2023</p>
              <p>Type: Collaboration</p>
              <p>Graphic Design</p>
              <p>Creative Direction</p>
            </div>
          </div> */}
        </div>
      </div>
      <div className={styles.images}>
        <Image
          src={"/tc1.png"}
          width={1400}
          height={787.5}
          quality={100}
          alt="THE CIRCLE"
          loading="lazy"
          />
        <Image
          src={"/tc2.png"}
          width={1400}
          height={787.5}
          quality={100}
          alt="THE CIRCLE"
          loading="lazy"
          />
        <Image
          src={"/tc3.png"}
          width={1400}
          height={787.5}
          quality={100}
          alt="THE CIRCLE"
          loading="lazy"
          />
        <Image
          src={"/tc4.png"}
          width={1400}
          height={787.5}
          quality={100}
          alt="THE CIRCLE"
          loading="lazy"
          />
        <Image
          src={"/tc5.png"}
          width={1400}
          height={787.5}
          quality={100}
          alt="THE CIRCLE"
          loading="lazy"
          />
        <Image
          src={"/tc6.png"}
          width={1400}
          height={787.5}
          quality={100}
          alt="THE CIRCLE"
          loading="lazy"
          />
        <Image
          src={"/tc7.png"}
          width={1400}
          height={787.5}
          quality={100}
          alt="THE CIRCLE"
          loading="lazy"
          />
        <Image
          src={"/tc8.png"}
          width={1400}
          height={787.5}
          quality={100}
          alt="THE CIRCLE"
          loading="lazy"
          />
        <Image
          src={"/tc9.png"}
          width={1400}
          height={787.5}
          quality={100}
          alt="THE CIRCLE"
          loading="lazy"
          />
        <Image
          src={"/tc10.png"}
          width={1400}
          height={787.5}
          quality={100}
          alt="THE CIRCLE"
          loading="lazy"
          />
        <Image
          src={"/tc11.png"}
          width={1400}
          height={787.5}
          quality={100}
          alt="THE CIRCLE"
          loading="lazy"
          />
      </div>
    </motion.section>
  );
}
