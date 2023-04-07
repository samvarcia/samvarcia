import styles from "./Flow.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Flow() {
  return (
    <div className={styles.flowwrap}>
      <div className={styles.flow}>
        <Image
          className={styles.bloop}
          src="/bloop.gif"
          width={773}
          height={527}
        />
        <Image
          className={styles.vertical}
          src="/AEXUI.png"
          width={287}
          height={511}
        />
      </div>
    </div>
  );
}
