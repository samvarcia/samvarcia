import styles from "./Flow.module.css";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Flow() {
  const flowRef = useRef();
  const constraintsRef = useRef(null);
  const { scrollXProgress } = useScroll();
  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleWheel = (evt) => {
    const flowbar = flowRef.current;
    if (flowbar) {
      flowbar.scrollLeft += evt.deltaY;
    }
    // console.log("WHEEL");
  };

  return (
    <div className={styles.flowwrap}>
      <motion.div
        className={styles.flow}
        style={scaleX || scaleY}
        ref={flowRef}
        onWheel={handleWheel}

        // dragConstraints={{ left: -100000, right: 0 }}
        // dragConstraints={{ left: 0, right: "200vw" }}
        // onMeasureDragConstraints={console.log}
        // dragSnapToOrigin={0}
      >
        <div className={styles.space}></div>
        <Image
          className={styles.web}
          src="/bloop.png"
          width={773}
          height={527}
          priority
        />
        <Image
          className={styles.vertical}
          src="/AEXUI.png"
          width={287}
          height={511}
          priority
        />
        <Image
          className={styles.web}
          src="/saikoro.png"
          width={773}
          height={527}
          priority
        />
        <Image
          className={styles.vertical}
          src="/icarus.svg"
          width={287}
          height={511}
          priority
        />
        <Image
          className={styles.web}
          src="/lightlamp.gif"
          width={773}
          height={527}
          priority
        />
        <Image
          className={styles.poster}
          src="/INSTW.png"
          width={287}
          height={511}
          alt="THE ROLLING STONES INSPIRED POSTER - SAMVARCIA"
          priority
        />
        <Image
          src="/BN.png"
          width={500}
          height={500}
          alt="BONNE NUIT"
          className={styles.square}
          priority
        />
        <Image
          className={styles.video}
          src="/thinkmore.gif"
          width={773}
          height={527}
          alt="AELIZA INSPIRED VIDEO - SAMVARCIA"
          priority
        />
      </motion.div>
    </div>
  );
}
