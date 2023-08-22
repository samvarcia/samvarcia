import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRef } from "react";

import styles from "./Flow.module.css";
const projects = [
  {
    src: "/wm.gif",
    class: "wm",
    route: "/wm",
    alt: "W&M'S - Samvarcia",
  },
  {
    src: "/BloopLanding.png",
    class: "web",
    route: "/bloop",
    alt: "Bloop - Samvarcia",
  },
  {
    src: "/WTC.png",
    class: "bn",
    route: "/bn",
    alt: "Where's The Culture? - Samvarcia",
  },
  {
    src: "/SAIKORO.png",
    class: "web",
    route: "/saikoro",
    alt: "Sa!koro - Samvarcia",
  },
  {
    src: "/ALLHEROESCREATE.png",
    class: "web",
    route: "/ahc",
    alt: "ALL HEROES CREATE - Samvarcia",
  },
  {
    src: "/BN.png",
    class: "bn",
    route: "/bn",
    alt: "BonneNuit - Samvarcia",
  },

  {
    src: "/AEXCAM.png",
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
    src: "/ICARUS.png",
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
  const [contentWidth, setContentWidth] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      setContentWidth(ref.current.offsetWidth);
    }
  }, []);
  console.log(window.innerWidth);
  return (
    <motion.div className={styles.projectsHorizonContainer}>
      <motion.div className={styles.projectsHorizonWrapper} ref={ref}>
        <motion.div
          className={styles.projectsHorizonContent}
          drag="x"
          // dragConstraints={{
          //   left: window.innerWidth,
          //   right: window.innerWidth,
          // dragConstraints={{ left: "10vw", right: "10vw" }}
          dragConstraints={ref}
          dragElastic={1}
          // dragTransition={{ bounceStiffness: 50, bounceDamping: 20 }}
          // dragSnapToOrigin={true}
        >
          {projects.map((project, index) => (
            <Image
              src={project.src}
              width="400"
              height="400"
              quality={100}
              loading="lazy"
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Flow;
