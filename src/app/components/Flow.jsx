import styles from "./Flow.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Flow() {
  const flowRef = useRef();
  const { scrollXProgress } = useScroll();
  const scaleX = useSpring(scrollXProgress, {
    stiffness: 10,
    damping: 30,
    restDelta: 0.001,
  });
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 10,
    damping: 30,
    restDelta: 0.001,
  });

  const flowbar = flowRef.current;

  // flowbar.addEventListener("wheel", (evt) => {
  //   evt.preventDefault();
  //   flowbar.scrollLeft += evt.deltaY;
  // });
  const handleWheel = (evt) => {
    evt.preventDefault();
    flowbar.scrollLeft += evt.deltaY;
  };

  return (
    <div className={styles.flowwrap}>
      <motion.div
        className={styles.flow}
        style={scaleX || scaleY}
        ref={flowRef}
        onWheel={handleWheel}
      >
        <div className={styles.space}></div>
        <Image
          className={styles.web}
          src="/bloop.svg"
          width={773}
          height={527}
        />
        <Image
          className={styles.vertical}
          src="/AEXUI.png"
          width={287}
          height={511}
        />
        <Image
          className={styles.web}
          src="/saikoro.svg"
          width={773}
          height={527}
        />
        <Image
          className={styles.vertical}
          src="/icarus.svg"
          width={287}
          height={511}
        />
      </motion.div>
    </div>
  );
}
