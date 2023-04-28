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
      src: "/ICARUSPROMO.png",
      alt: "ICARUS PROMO - SAMVARCIA",
      show: false,
    },
    {
      src: "/ICARUSAD.png",
      alt: "ICARUS LOGO LOGIC - SAMVARCIA",
      show: false,
    },
    {
      src: "/ICARUS.png",
      alt: "ICARUS UI - SAMVARCIA",
      show: false,
    },
    {
      src: "/DELIVERY.png",
      alt: "ICARUS UI DELIVERY - SAMVARCIA",
      show: false,
    },
    {
      src: "/SDRONE.png",
      alt: "SMALL ICARUS DRONE - SAMVARCIA",
      show: false,
    },
    {
      src: "/MDRONE.png",
      alt: "MEDIUM ICARUS DRONE - SAMVARCIA",
      show: false,
    },
    {
      src: "/LDRONE.png",
      alt: "LARGE ICARUS DRONE - SAMVARCIA",
      show: false,
    },
    {
      src: "/XLDRONE.png",
      alt: "XLARGE ICARUS DRONE - SAMVARCIA",
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
          <h1>ICARUS - 2022</h1>
          <p>UX/UI Design, Creative Direction, Brand, 3D Modeling</p>
        </div>
      </div>
    </section>
  );
}
