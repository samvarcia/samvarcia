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
        <li className={styles.wingzItem}>
          <Link href="/wingz">
            <img src="/wings.png" alt="WINGZ POSTER" />
          </Link>
        </li>
        <li className={styles.victorianItem}>
          <Link href="/victoriansam">
            <img src="/victorian.png" alt="VICTORIAN POSTER" />
          </Link>
        </li>
        <li className={styles.glowItem}>
          <Link href="/glow">
            <img src="/glowcross.png" alt="GLOW PRODUCT" />
          </Link>
        </li>
        <li className={styles.trustItem}>
          <Link href="/trust">
            <img src="/trust.png" alt="TRUST POSTER" />
          </Link>
        </li>
        <li className={styles.walletItem}>
          <Link href="/wallet">
            <img src="/walletpre.png" alt="WALLET DESIGN" />
          </Link>
        </li>
        <li className={styles.playboyItem}>
          <Link href="/playboy">
            <img src="/playboy3.png" alt="PLAYBOY TSHIRT" />
          </Link>
          </li>
        <li className={styles.wmItem}>
          <Link href="/wm">
            <img src="/wmpre.png" alt="W&M DESIGN" />
          </Link>
        </li>
        <li className={styles.circleItem}>
          <Link href="/thecircle">
            <img src="/thecircle.png" alt="THE CIRCLE BRAND" />
          </Link>
            </li>
        <li className={styles.designItem}>
          <Link href="glue">
            <img src="/design.png" alt="DESIGN POSTER" />
          </Link>
        </li>
        <li className={styles.hunterItem}>
          <Link href="/hunter">
            <img src="/hunter.png" alt="HUNTER TSHIRT" />
          </Link>
        </li>
        <li className={styles.wtcItem}>
          <Link href="/wtc">
            <img src="/wtcpic.png" alt="WTC POSTER" />
          </Link>
          </li>
        <li className={styles.champainItem}>
          <Link href="/champain">
            <img src="/champain.png" alt="CHAMPAIN PRODUCT" />
          </Link>
          </li>
        <li className={styles.heroesItem}>
          <Link href="/allheroescreate">
            <img src="/heroes.png" alt="HEROES POSTER" />
          </Link>
        </li>
        <li className={styles.bloopItem}>
          <Link href="/bloop">
            <img src="/bloops.png" alt="BLOOP" />
          </Link>
        </li>
      </ul>
    </motion.div>
  );
};

export default Collage;
