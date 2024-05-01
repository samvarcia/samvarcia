import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import wingz from '../../../public/wings.png'

import styles from "./Collage.module.css";
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

const Collage = () => {

  return (
    <motion.div
      className={styles.collage}
    >
      <ul className={styles.gridcontainer}>
        <li className={styles.wingzItem}><img src="/wings.png" alt="WINGZ POSTER" /></li>
        <li className={styles.victorianItem}><img src="/victorian.png" alt="VICTORIAN POSTER" /></li>
        <li className={styles.trustItem}><img src="/trust.png" alt="TRUST POSTER" /></li>
        <li className={styles.walletItem}><img src="/wallet.png" alt="WALLET DESIGN" /></li>
        <li className={styles.playboyItem}><img src="/playboy.png" alt="PLAYBOY TSHIRT" /></li>
        <li className={styles.wmItem}><img src="/wm.png" alt="W&M DESIGN" /></li>
        <li className={styles.circleItem}><img src="/thecircle.png" alt="THE CIRCLE BRAND" /></li>
        <li className={styles.designItem}><img src="/design.png" alt="DESIGN POSTER" /></li>
        <li className={styles.hunterItem}><img src="/hunter.png" alt="HUNTER TSHIRT" /></li>
        <li className={styles.wtcItem}><img src="/wtc.png" alt="WTC POSTER" /></li>
        <li className={styles.champainItem}><img src="/champain.png" alt="CHAMPAIN PRODUCT" /></li>
        <li className={styles.heroesItem}><img src="/heroes.png" alt="HEROES POSTER" /></li>
        <li className={styles.glowItem}><img src="/glow.png" alt="GLOW PRODUCT" /></li>
        <li className={styles.bloopItem}><img src="/bloop.png" alt="BLOOP" /></li>
      </ul>
    </motion.div>
  );
};

export default Collage;
