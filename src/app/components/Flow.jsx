import { useState, useEffect } from "react";
import Ticker from "framer-motion-ticker";
import Image from "next/image";
import Link from "next/link";
import styles from "./Flow.module.css";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: "/bloop.gif", class: "web", route: "/bloop" },
  { src: "/BN.png", class: "bn", route: "/bn" },
  { src: "/saikoro.gif", class: "web", route: "/saikoro" },
  { src: "/AEXWRAP.png", class: "think", route: "/aex" },
  { src: "/greenlamp.gif", class: "think", route: "/glow" },
  { src: "/INSTW.png", class: "poster", route: "/instw" },
  { src: "/icarus.svg", class: "vertical", route: "/icarus" },
  { src: "/thinkmore.gif", class: "think", route: "/thinkmore" },
];
const Flow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentIndex) =>
        currentIndex === images.length - 1 ? 0 : currentIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentImageIndex];
  return (
    <div className={styles.projects}>
      <Link href={currentImage.route}>
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex].src}
          alt="Fading image"
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
