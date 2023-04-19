"use client";

import Image from "next/image";
import styles from "./bloop.module.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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
      src: "/bloop.gif",
      alt: "Bloop website - SAMVARCIA",
      show: false,
    },
    {
      src: "/blooplogo.png",
      alt: "Bloop logo - SAMVARCIA",
      show: false,
    },
    // Add more images as needed
  ];

  return (
    <section className={styles.bloop}>
      {images.map((image, index) =>
        index === currentImageIndex ? (
          <motion.div
            key={index}
            className={styles.gallery}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <img src={image.src} alt={image.alt} />
          </motion.div>
        ) : null
      )}
      <div className={styles.bloopCopy}>
        <h1>Bloop</h1>
        <h2>Web Design, Branding, Research</h2>
      </div>
    </section>
  );
}
