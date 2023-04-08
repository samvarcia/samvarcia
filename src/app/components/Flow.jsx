import styles from "./Flow.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Flow() {
  const { scrollXProgress } = useScroll();
  const scaleX = useSpring(scrollXProgress, {
    stiffness: 500,
    damping: 70,
    restDelta: 0.001,
  });
  return (
    <div className={styles.flowwrap}>
      <motion.div className={styles.flow} style={scaleX}>
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
