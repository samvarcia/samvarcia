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
      <div className={styles.projectCopy}>
        <div className={styles.projectCopyWrap}>
          <div className={styles.projectCopyTitle}>
            <div className={styles.projectCopyTitleDate}>
              <h1>ICARUS</h1>
            </div>
            <p>UX/UI Design, Creative Direction, Brand, 3D Modeling</p>
            <p style={{ marginTop: "5px" }}>2022</p>
          </div>
          <p className={styles.projectCopyDescription}>
            What would it be like if humans lived on the moon? How would an app
            to send things there work? I solved these questions and proposed the
            solution in this app design. For the branding I was inspired by
            nasa, the moon and the earth. Also design the different drones to
            make it possible.
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
