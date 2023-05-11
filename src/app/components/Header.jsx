"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Header.module.css";
const Header = ({ pages }) => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const index = pages.findIndex((page) => page.path === pathname);
    setCurrentIndex(index);
  }, [router.pathname]);

  const handlePrevious = () => {
    if (currentIndex === 0) {
      router.push(pages[pages.length - 1].path);
    } else {
      router.push(pages[currentIndex - 1].path);
    }
  };

  const handleNext = () => {
    if (currentIndex === pages.length - 1) {
      router.push(pages[0].path);
    } else {
      router.push(pages[currentIndex + 1].path);
    }
  };

  return (
    <div className={styles.Header}>
      <p onClick={handlePrevious}>Previous</p>
      <p onClick={handleNext}>Next</p>
    </div>
  );
};

export default Header;
