import { useState, useEffect } from "react";
import Ticker from "framer-motion-ticker";
import Image from "next/image";
import styles from "./Flow.module.css";
const images = [
  { path: "/bloop.png", class: "web" },
  { path: "/BN.png", class: "bn" },
  { path: "/saikoro.png", class: "web" },
  { path: "/AEXUI.png", class: "vertical" },
  { path: "/lightlamp.gif", class: "think" },
  { path: "/INSTW.png", class: "poster" },
  { path: "/icarus.svg", class: "vertical" },
  { path: "/thinkmore.gif", class: "think" },
];
const Flow = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className={styles.pieces}>
      <div className={styles.flow}>
        <Ticker
          duration={30}
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          isPlaying={isPlaying}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image.path}
              alt={`Image ${index + 1}`}
              className={styles[image.class]}
            />
          ))}
        </Ticker>
      </div>
    </div>
  );
};

export default Flow;
