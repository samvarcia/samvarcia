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
      src: "/aex.gif",
      alt: "AEX - SAMVARCIA",
      show: false,
    },
    {
      src: "/AEXUI.png",
      alt: "AEX - SAMVARCIA",
      show: false,
    },
    {
      src: "/AEXBRAND.png",
      alt: "AEX BRAND - SAMVARCIA",
      show: false,
    },
    {
      src: "/AEXPIXELTHEMOMENT.png",
      alt: "AEX ADS - SAMVARCIA",
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
          <h1>ÆX</h1>
          <p>Web Design, Creative Direction, Brand</p>
          <a href="https://www.saikorito.com/" target="_blank">
            ÆX WEBSITE
          </a>
        </div>
        {/* <p className={styles.projectText}>
          In 2022, I collaborated with Bloop (Techstars 22) designing the
          landing page and brand of the startup, I was inspired by the sense of
          connection and community of the product and team values. I had the
          opportunity to attend several lectures hosted by Techstars and conduct
          user research sessions.
        </p> */}
      </div>
    </section>
  );
}
