"use client";

import Image from "next/image";
import styles from "./about.module.css";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <h1>SAMUEL GARCIA (AKA SAMVARCIA - 2004 - BOGOTÁ)</h1>

          <p>
            OBSESSED WITH CREATING. EXPERIENCE IN{" "}
            <a
              href="https://www.semana.com/historia-de-samuel-garcia-cofundador-de-uziday/266407/"
              target="_blank"
              className={styles.link}
            >
              STARTUPS
            </a>
            , WEB, PRODUCT, BRANDS, GRAPHICS AND{" "}
            <a
              href="https://www.are.na/samuel-garcia"
              target="_blank"
              className={styles.link}
            >
              DESIGN
            </a>{" "}
            IN GENERAL. FOCUSED ON BRINGING 10 STAR EXPERIENCES TO THE WORLD.
            LOVE FOR FASHION, MUSIC AND FILM
          </p>
        </div>
        <div className={styles.contact}>
          <a href="mailto:samvarcia@gmail.com">EMAIL</a>
          <a href="https://twitter.com/samvarcia" target="_blank">
            TWITTER
          </a>
          <a href="https://www.instagram.com/samvarcia/" target="_blank">
            INSTAGRAM
          </a>
        </div>
      </div>
    </div>
  );
}
