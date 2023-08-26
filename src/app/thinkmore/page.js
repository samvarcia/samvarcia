"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentIndex) =>
        currentIndex === images.length - 1 ? 0 : currentIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const images = [
    {
      src: "/thinkmore.gif",
      alt: "Think More - SAMVARCIA",
      show: false,
    },

    // Add more images as needed
  ];

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
              <h1>VIDEO SAMPLES INSPIRED BY AELIZA</h1>
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.tags}>
              <p>Year: 2022</p>
              <p>Type: Personal</p>
              <p>Video Creation</p>
              <p>Graphic Design</p>
              <p>3D Modeling</p>
            </div>
          </div>
        </div>
        <div className={styles.images}>
          <Image
            src={"/thinkmore.gif"}
            width={1400}
            height={787.5}
            quality={100}
            alt="THINK MORE"
            priority={true}
          />
        </div>
      </div>
    </motion.section>
  );
}
