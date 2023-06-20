import { useState, useEffect } from "react";
import Ticker from "framer-motion-ticker";
import Image from "next/image";
import Link from "next/link";
import styles from "./Flow.module.css";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    src: "https://raw.githubusercontent.com/samvarcia/samvarcia/main/public/bloop.png",
    class: "web",
    route: "/bloop",
    alt: "Bloop - Samvarcia",
  },
  {
    src: "https://raw.githubusercontent.com/samvarcia/samvarcia/main/public/BN.png",
    class: "bn",
    route: "/bn",
    alt: "BonneNuit - Samvarcia",
  },
  {
    src: "https://raw.githubusercontent.com/samvarcia/samvarcia/main/public/saikoro.png",
    class: "web",
    route: "/saikoro",
    alt: "Sa!koro - Samvarcia",
  },
  {
    src: "https://raw.githubusercontent.com/samvarcia/samvarcia/main/public/AEXWRAP.png",
    class: "think",
    route: "/aex",
    alt: "AEX - Samvarcia",
  },
  {
    src: "https://raw.githubusercontent.com/samvarcia/samvarcia/main/public/greenlamp.gif",
    class: "think",
    route: "/glow",
    alt: "GLOW - Samvarcia",
  },
  {
    src: "https://raw.githubusercontent.com/samvarcia/samvarcia/main/public/INSTW.png",
    class: "poster",
    route: "/instw",
    alt: "TheRollingStones - Samvarcia",
  },
  {
    src: "https://raw.githubusercontent.com/samvarcia/samvarcia/main/public/ICARUS.png",
    class: "vertical",
    route: "/icarus",
    alt: "ICARUS - Samvarcia",
  },
  {
    src: "https://raw.githubusercontent.com/samvarcia/samvarcia/main/public/thinkmore.gif",
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
          transition={{ delay: 0.8 }}
          className={styles[currentImage.class]}
        />
      </Link>
    </div>
  );
};

export default Flow;
