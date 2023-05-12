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
      src: "/aex.gif",
      alt: "AEX - SAMVARCIA",
      show: false,
    },
    {
      src: "/AEXWRAP.png",
      alt: "AEX - SAMVARCIA",
      show: false,
    },
    {
      src: "/AEXBRAND.png",
      alt: "AEX BRAND - SAMVARCIA",
      show: false,
    },
    {
      src: "/aex1.png",
      alt: "AEX PHOTO - SAMVARCIA",
      show: false,
    },
    {
      src: "/aex2.png",
      alt: "AEX PHOTO - SAMVARCIA",
      show: false,
    },
    {
      src: "/aex3.png",
      alt: "AEX PHOT - SAMVARCIA",
      show: false,
    },
    {
      src: "/aex4.png",
      alt: "AEX PHOTO - SAMVARCIA",
      show: false,
    },
    {
      src: "/aex5.png",
      alt: "AEX PHOTO - SAMVARCIA",
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
              <h1>ÆX</h1>
            </div>
            <p>Web Design, Creative Direction, Brand, UX/UI Design</p>
            <a
              href="https://aex.vercel.app"
              target="_blank"
              className={styles.projectCopyWebsite}
            >
              ÆX WEBSITE
            </a>
            <p style={{ marginTop: "5px" }}>2023</p>
          </div>
          <p className={styles.projectCopyDescription}>
            I discovered the 90s Nintendo’s camera and I was fascinated by the
            looks of those images, so I designed this android prototype to
            imitate the pixelated aesthetic of it providing the ability to
            customize colors and download images.
          </p>

          <div className={styles.projectTypeTools}>
            <p>Solo</p>
            <div className={styles.tools}>
              <Image
                src={"/figma.svg"}
                width={40}
                height={40}
                alt="Figma"
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
    </motion.section>
  );
}
