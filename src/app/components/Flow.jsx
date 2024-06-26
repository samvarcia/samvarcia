import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";

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
    class: "wtc",
    route: "/wtc",
    alt: "Where's The Culture? - Samvarcia",
  },
  {
    src: "/saikoro.png",
    class: "web",
    route: "/saikoro",
    alt: "Sa!koro - Samvarcia",
  },
  {
    src: "/ALLHEROESCREATE.png",
    class: "web",
    route: "/allheroescreate",
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
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  // const [height, setHeight] = useState(0);
  const carousel = useRef();
  const router = useRouter();
  const [isDragging, setIsDragging] = useState(false); // State to track dragging
  const [dragDirection, setDragDirection] = useState("x"); // Initialize with "x" for desktop
  const [dragConstraints, setDragConstraints] = useState({ right: 0, left: 0 });

  // useEffect(() => {
  //   const screenWidth = window.innerWidth;
  //   if (screenWidth <= 768) {
  //     setDragDirection("y");
  //     const contentHeight = carousel.current.scrollHeight;
  //     setDragConstraints({ top: 0, bottom: -contentHeight });
  //   } else {
  //     setDragDirection("x");
  //     setDragConstraints({ right: 0, left: -width });
  //   }
  // }, [carousel.current]);
  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [carousel.current]);

  const navigateToRoute = (route) => {
    if (!isDragging) {
      router.push(route);
    }
  };

  return (
    <motion.div
      className={styles.projectsHorizonWrapper}
      ref={carousel}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={styles.projectsHorizonContent}
        drag={dragDirection}
        dragConstraints={{ right: 0, left: -width }}
        onDragStart={() => setIsDragging(true)} // Set dragging state to true
        onDragEnd={() => setIsDragging(false)} // Set dragging state to false
      >
        {projects.map((project, index) => (
          <AnimatePresence mode="wait">
            <motion.div
              onClick={() => navigateToRoute(project.route)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            >
              <Image
                src={project.src}
                width="400"
                height="400"
                quality={100}
                // loading="lazy"
                priority={true}
              />
            </motion.div>
          </AnimatePresence>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Flow;
