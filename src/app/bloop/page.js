"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const images = [
  {
    src: "/BloopLanding.png",
    alt: "Bloop website - SAMVARCIA",
    show: false,
  },
  {
    src: "/blooplogo.png",
    alt: "Bloop logo - SAMVARCIA",
    show: false,
  },
  {
    src: "/bloopconcept.png",
    alt: "Bloop Concept - SAMVARCIA",
    show: false,
  },
  {
    src: "/bloopbrand.png",
    alt: "Bloop Brand - SAMVARCIA",
    show: false,
  },
  {
    src: "/bloopcard.png",
    alt: "Bloop Card - SAMVARCIA",
    show: false,
  },

  // Add more images as needed
];
export default function Page() {
  return (
    <div className={styles.project}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className={styles.projectCopy}>
          <div className={styles.projectCopyWrap}>
            <div className={styles.projectCopyTitle}>
              <div className={styles.projectCopyTitleDate}>
                <h1>Bloop</h1>
              </div>
            </div>
            <p className={styles.projectCopyDescription}>
              In the creation of Bloop's website and brand, I drew inspiration
              from space, connectivity, and motion. This reflects the product's
              core value of fostering a community-driven search experience,
              where users can share curated lists of websites, transforming
              browsing into a social experience. Participated in User Research
              sessions and attented Techstars 22’ lectures.
            </p>
            <div className={styles.details}>
              <div className={styles.tags}>
                <p>Year: 2022</p>
                <p>Type: Client</p>
                <p>Web Design</p>
                <p>Branding</p>
                <p>User Research</p>
              </div>
              {/* <div className={styles.projectTypeTools}>
                <div className={styles.tools}>
                  <Image
                    src={"/figma.svg"}
                    width={40}
                    height={40}
                    alt="figma"
                    style={{ marginRight: "20px" }}
                  />
                  <Image
                    src={"/photoshop.svg"}
                    width={40}
                    height={40}
                    alt="photoshop"
                    style={{ marginRight: "20px" }}
                  />
                  <Image
                    src={"/react.svg"}
                    width={40}
                    height={40}
                    alt="react"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </motion.div>
      <div className={styles.images}>
        <Image
          src={"/bloopsummary.png"}
          width={1600}
          height={900}
          quality={100}
          alt="Bloop"
          priority={true}
        />
      </div>
    </div>
  );
}
