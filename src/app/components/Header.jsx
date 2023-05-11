"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const Header = ({ pages }) => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  // const pathname = usePathname();

  useEffect(() => {
    const index = pages.findIndex((page) => page.path === router.pathname);
    setCurrentIndex(index);
  }, [router.pathname]);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      router.push(pages[currentIndex - 1].path);
    }
  };

  const handleNext = () => {
    if (currentIndex < pages.length - 1) {
      router.push(pages[currentIndex + 1].path);
    }
  };

  return (
    <div>
      <button onClick={handlePrevious} disabled={currentIndex === 0}>
        Previous
      </button>
      <button onClick={handleNext} disabled={currentIndex === pages.length - 1}>
        Next
      </button>
    </div>
  );
};

export default Header;
