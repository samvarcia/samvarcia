import { useState, useEffect } from "react";
import Ticker from "framer-motion-ticker";
import Image from "next/image";
import Link from "next/link";
import styles from "./Flow.module.css";
import { motion, AnimatePresence } from "framer-motion";
const projects = [
  {
    src: "/BloopLanding.png",
    class: "web",
    route: "/bloop",
    alt: "Bloop - Samvarcia",
  },
  {
    src: "/BN.png",
    class: "bn",
    route: "/bn",
    alt: "BonneNuit - Samvarcia",
  },
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
  return (
    <div className={styles.projectsHorizon}>
      {projects.map((project, index) => (
        <Image src={project.src} width="400" height="450" quality={100} />
      ))}
    </div>
  );
};

export default Flow;
