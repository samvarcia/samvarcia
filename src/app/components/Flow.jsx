import { useState, useEffect } from "react";
import Ticker from "framer-motion-ticker";
import Image from "next/image";
import Link from "next/link";
import styles from "./Flow.module.css";
import { motion } from "framer-motion";
const images = [
  { path: "/bloop.png", class: "web", route: "/bloop" },
  { path: "/BN.png", class: "bn", route: "/bn" },
  { path: "/saikoro.png", class: "web", route: "/saikoro" },
  { path: "/AEXUI.png", class: "vertical", route: "/aex" },
  { path: "/greenlamp.gif", class: "think", route: "/glow" },
  { path: "/INSTW.png", class: "poster", route: "/instw" },
  { path: "/icarus.svg", class: "vertical", route: "/icarus" },
  { path: "/thinkmore.gif", class: "think", route: "/thinkmore" },
];
const Flow = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className={styles.pieces}>
      <div className={styles.flow}>
        <Ticker
          duration={22}
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          isPlaying={isPlaying}
        >
          {images.map((image, index) => (
            <Link href={image.route}>
              <img
                key={index}
                src={image.path}
                alt={`Image ${index + 1}`}
                className={styles[image.class]}
              />
            </Link>
          ))}
        </Ticker>
      </div>
    </div>
  );
};

export default Flow;
