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
      <div className={styles.projectCopy}>
        <div>
          <h1>GLOW</h1>
          <p>3D Modeling, Creative Direction, Brand</p>
        </div>
      </div>
    </section>
  );
}
