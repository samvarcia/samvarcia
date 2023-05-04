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
      src: "/bloop.gif",
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

  return (
    <section className={styles.project}>
      <div className={styles.projectCopy}>
        <div className={styles.projectCopyWrap}>
          <div className={styles.projectCopyTitle}>
            <div className={styles.projectCopyTitleDate}>
              <h1>Bloop</h1>
            </div>
            <p>Web Design, Branding, Research</p>
            <p style={{ marginTop: "5px" }}>2022</p>
          </div>
          <p className={styles.projectCopyDescription}>
            In the creation of Bloop's website and brand, I drew inspiration
            from space, connectivity, and motion. This reflects the product's
            core value of fostering a community-driven search experience, where
            users can share curated lists of websites, transforming browsing
            into a social experience. Participated in User Research sessions and
            attented Techstars 22’ lectures.
          </p>
          <div className={styles.projectTypeTools}>
            <p>Collaboration</p>
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
              <Image src={"/react.svg"} width={40} height={40} alt="react" />
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
