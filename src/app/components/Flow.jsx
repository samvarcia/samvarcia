import { useState, useEffect } from "react";
import styles from "./Flow.module.css";
const images = [
  "/bloop.png",
  "/saikoro.png",
  "/BN.png",
  "/AEXUI.png",
  "/lightlamp.gif",
  "/icarus.svg",
  "/thinkmore.gif",
];

export default function Flow() {
  return (
    // <div className={styles.flow}>
    //   <div className={styles.flowInner}>
    //     <img src="/bloop.png" />
    //     <img src="/saikoro.png" />
    //     <img src="/BN.png" />
    //     <img src="/AEXUI.png" />
    //     <img src="/lightlamp.gif" />
    //     <img src="/icarus.svg" />
    //     <img src="/thinkmore.gif" />
    //   </div>
    // </div>
    <div className={styles.flow}>
      <div className={styles.ticker}>
        <img
          class="w-64 mx-4 self-start flex-none"
          src="https://via.placeholder.com/256x341/f4ccccff/434343?text=1"
        />
        <img
          class="w-64 mx-4 self-start flex-none"
          src="https://via.placeholder.com/256x192/f4ccccff/434343?text=2"
        />
        <img
          class="w-64 mx-4 self-start flex-none"
          src="https://via.placeholder.com/256x341/f4ccccff/434343?text=3"
        />
        <img
          class="w-64 mx-4 self-start flex-none"
          src="https://via.placeholder.com/256x192/f4ccccff/434343?text=4"
        />
        <img
          class="w-64 mx-4 self-start flex-none"
          src="https://via.placeholder.com/256x341/f4ccccff/434343?text=5"
        />
        <img
          class="w-64 mx-4 self-start flex-none"
          src="https://via.placeholder.com/256x192/f4ccccff/434343?text=6"
        />

        <img
          class="w-64 mx-4 self-start flex-none"
          src="https://via.placeholder.com/256x341/f4ccccff/434343?text=1"
        />
        <img
          class="w-64 mx-4 self-start flex-none"
          src="https://via.placeholder.com/256x192/f4ccccff/434343?text=2"
        />
        <img
          class="w-64 mx-4 self-start flex-none"
          src="https://via.placeholder.com/256x341/f4ccccff/434343?text=3"
        />
        <img
          class="w-64 mx-4 self-start flex-none"
          src="https://via.placeholder.com/256x192/f4ccccff/434343?text=4"
        />
        <img
          class="w-64 mx-4 self-start flex-none"
          src="https://via.placeholder.com/256x341/f4ccccff/434343?text=5"
        />
        <img
          class="w-64 mx-4 self-start flex-none"
          src="https://via.placeholder.com/256x192/f4ccccff/434343?text=6"
        />
      </div>
    </div>
  );
}
