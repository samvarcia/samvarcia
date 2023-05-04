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
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const images = [
    {
      src: "/INSTW.png",
      alt: "THE ROLLING STONES POSTER - SAMVARCIA",
      show: false,
    },
    // Add more images as needed
  ];

  return (
    <section className={styles.project}>
      <div className={styles.projectCopy}>
        <div className={styles.projectCopyWrap}>
          <div className={styles.projectCopyTitle}>
            <div className={styles.projectCopyTitleDate}>
              <h1>THE ROLLING STONES POSTER</h1>
            </div>
            <p>Graphic Design, Creative Direction, Layout Design</p>
            <p style={{ marginTop: "5px" }}>2023</p>
            <div className={styles.projectTypeTools}>
              <p>Solo</p>
              <div className={styles.tools}>
                <Image
                  src={"/photoshop.svg"}
                  width={40}
                  height={40}
                  alt="photoshop"
                  style={{ marginRight: "20px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {images.map((image, index) =>
        index === currentImageIndex ? (
          <motion.div
            key={index}
            className={styles.gallery}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Image
              className={styles.projectimg}
              priority
              width={500}
              height={500}
              src={image.src}
              alt={image.alt}
            />
          </motion.div>
        ) : null
      )}
    </section>
  );
}
