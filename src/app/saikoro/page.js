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
      src: "/saikoro.gif",
      alt: "SA!KORO WEBSITE - SAMVARCIA",
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
              <h1>Sa!koro Website</h1>
            </div>
            <p>Web Design, Creative Direction</p>
            <p style={{ marginTop: "5px" }}>2023</p>
            <a
              href="https://www.saikorito.com/"
              target="_blank"
              className={styles.projectCopyWebsite}
            >
              saikorito.com
            </a>
            <p style={{ marginTop: "5px" }}>2023</p>
          </div>
          <p className={styles.projectCopyDescription}>
            Teaming up with the musical artist Sa!koro we created his first
            website, inspired by the Y2K aesthetic, pale colors and diamond trap
            culture. Our goal was to showcase his unique style, personality, and
            musical journey over time.
          </p>

          <div className={styles.projectTypeTools}>
            <p>Collaboration</p>
            <div className={styles.tools}>
              <Image
                src={"/figma.svg"}
                width={40}
                height={40}
                alt="Figma"
                style={{ marginRight: "20px" }}
              />
              <Image
                src={"/photoshop.svg"}
                width={40}
                height={40}
                alt="Photoshop"
                style={{ marginRight: "20px" }}
              />
              <Image src={"/nextjs.svg"} width={40} height={40} alt="NextJS" />
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
            transition={{ duration: 2 }}
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
