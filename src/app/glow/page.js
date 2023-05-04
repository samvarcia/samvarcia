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
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const images = [
    {
      src: "/greenlamp.gif",
      alt: "GLOW - SAMVARCIA",
      show: false,
    },
    {
      src: "/GLOWLOGO.png",
      alt: "GLOW LOGO - SAMVARCIA",
      show: false,
    },
    {
      src: "/ISOBLUE.jpg",
      alt: "GLOW BLUE - SAMVARCIA",
      show: false,
    },
    {
      src: "/ISOGREEN.jpg",
      alt: "GLOW GREEN - SAMVARCIA",
      show: false,
    },
    {
      src: "/ISORED.jpg",
      alt: "GLOW RED - SAMVARCIA",
      show: false,
    },
    {
      src: "/ISOLIGHT.jpg",
      alt: "GLOW LIGHT - SAMVARCIA",
      show: false,
    },
    {
      src: "/GLOWSKETCH.png",
      alt: "GLOW SKETCH - SAMVARCIA",
      show: false,
    },
    {
      src: "/LAMPSKETCH.png",
      alt: "GLOW LAMP SKETCH - SAMVARCIA",
      show: false,
    },
    {
      src: "/_GLOW_.png",
      alt: "GLOW AD - SAMVARCIA",
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
              <h1>Glow</h1>
            </div>
            <p>3D Modeling, Creative Direction, Brand</p>
            <p style={{ marginTop: "5px" }}>2022</p>
          </div>
          <p className={styles.projectCopyDescription}>
            I love beautiful things, James Turrell's work and 3D design. So, I
            created a lamp concept that comes in four colors. I wanted to make
            it look soft and gentle.
          </p>
          <div className={styles.projectTypeTools}>
            <p>Solo</p>
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
              <Image src={"/spline.png"} width={40} height={40} alt="Spline" />
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
            transition={{ duration: 2 }}
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
