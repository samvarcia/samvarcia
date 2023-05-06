import { useState, useEffect } from "react";
import Ticker from "framer-motion-ticker";
import Image from "next/image";
import Link from "next/link";
import styles from "./Flow.module.css";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    src: "/bloop.png",
    class: "web",
    route: "/bloop",
    alt: "Bloop - Samvarcia",
  },
  { src: "/BN.png", class: "bn", route: "/bn", alt: "BonneNuit - Samvarcia" },
  {
    src: "/saikoro.png",
    class: "web",
    route: "/saikoro",
    alt: "Sa!koro - Samvarcia",
  },
  {
    src: "/AEXWRAP.png",
    class: "think",
    route: "/aex",
    alt: "AEX - Samvarcia",
  },
  {
    src: "/greenlamp.gif",
    class: "think",
    route: "/glow",
    alt: "GLOW - Samvarcia",
  },
  {
    src: "/INSTW.png",
    class: "poster",
    route: "/instw",
    alt: "TheRollingStones - Samvarcia",
  },
  {
    src: "/icarus.svg",
    class: "vertical",
    route: "/icarus",
    alt: "ICARUS - Samvarcia",
  },
  {
    src: "/thinkmore.gif",
    class: "think",
    route: "/thinkmore",
    alt: "AELIZA - Samvarcia",
  },
];
const Flow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentIndex) =>
        currentIndex === images.length - 1 ? 0 : currentIndex + 1
      );
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentImageIndex];
  return (
    <div className={styles.projects}>
      <Link href={currentImage.route}>
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex].src}
          alt={currentImage.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          exit={{ opacity: 0 }}
          className={styles[currentImage.class]}
        />
      </Link>
    </div>
  );
};

export default Flow;
