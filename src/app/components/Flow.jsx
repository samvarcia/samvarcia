// import styles from "./Flow.module.css";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";

export default function Flow() {
  const containerRef = useRef(null);

  useEffect(() => {
    const containerHeight = containerRef.current.offsetHeight;
    const scrollHeight = containerRef.current.scrollHeight;

    let currentScrollTop = 0;

    const intervalId = setInterval(() => {
      currentScrollTop += 1;

      if (currentScrollTop > scrollHeight - containerHeight) {
        currentScrollTop = 0;
      }

      containerRef.current.scrollTop = currentScrollTop;
    }, 10);

    return () => clearInterval(intervalId);
  }, []);
  const imageUrls = [
    "/bloop2.png",
    "/AEXUI.png",
    "/saikoro2.png",
    "/icarus.svg",
    "/lightlamp.gif",
    "/INSTW.png",
    "/BN.png",
    "/thinkmore.gif",
    // Add more images as needed
  ];
  // const flowRef = useRef();
  // const constraintsRef = useRef(null);
  // const { scrollXProgress } = useScroll();
  // const scaleX = useSpring(scrollXProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });
  // const { scrollYProgress } = useScroll();
  // const scaleY = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });

  // const handleWheel = (evt) => {
  //   const flowbar = flowRef.current;
  //   if (flowbar) {
  //     flowbar.scrollLeft += evt.deltaY;
  //   }
  //   // console.log("WHEEL");
  // };

  return (
    <div
      ref={containerRef}
      className={styles.imageList}
      // style={{
      //   transform: `translateY(-${scrollTop}px)`,
      // }}
    >
      {imageUrls.map((imageUrl, index) => (
        <div key={index} className={styles.imageContainer}>
          <img src={imageUrl} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
    // <div className={styles.flowwrap}>
    //   <motion.div className={styles.flow}>
    //     <div className={styles.space}></div>
    //     <Link href={"/bloop"}>
    //       <Image
    //         className={styles.web}
    //         src="/bloop.png"
    //         width={773}
    //         height={527}
    //         priority
    //       />
    //     </Link>
    //     <Image
    //       className={styles.vertical}
    //       src="/AEXUI.png"
    //       width={287}
    //       height={511}
    //       priority
    //     />
    //     <Image
    //       className={styles.web}
    //       src="/saikoro.png"
    //       width={773}
    //       height={527}
    //       priority
    //     />
    //     <Image
    //       className={styles.vertical}
    //       src="/icarus.svg"
    //       width={287}
    //       height={511}
    //       priority
    //     />
    //     <Image
    //       className={styles.web}
    //       src="/lightlamp.gif"
    //       width={773}
    //       height={527}
    //       priority
    //     />
    //     <Image
    //       className={styles.poster}
    //       src="/INSTW.png"
    //       width={287}
    //       height={511}
    //       alt="THE ROLLING STONES INSPIRED POSTER - SAMVARCIA"
    //       priority
    //     />
    //     <Image
    //       src="/BN.png"
    //       width={500}
    //       height={500}
    //       alt="BONNE NUIT"
    //       className={styles.square}
    //       priority
    //     />
    //     <Image
    //       className={styles.video}
    //       src="/thinkmore.gif"
    //       width={773}
    //       height={527}
    //       alt="AELIZA INSPIRED VIDEO - SAMVARCIA"
    //       priority
    //     />
    //   </motion.div>
    // </div>
  );
}
