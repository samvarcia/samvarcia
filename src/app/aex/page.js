"use client";

import Image from "next/image";
import styles from "./bloop.module.css";
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
      src: "/AEXUI.png",
      alt: "AEX UI - SAMVARCIA",
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
    <Link href={"/"}>
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
          <div>
            <h1>AEX</h1>
            <p>Web Design, Branding, Research</p>
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
    </Link>
  );
}
