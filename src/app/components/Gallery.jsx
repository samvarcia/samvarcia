// Gallery.jsx
"use client";

import styles from './Gallery.module.css';
import { useState, useEffect } from 'react';

const Gallery = ({ projects }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={styles.gridContainer}>
      {projects.map((project, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.imageWrapper}>
            <img src={project.mainImage} alt={project.title} className={styles.image} />
          </div>
          <div className={styles.info}>
            <h3 className={styles.title}>{project.title}</h3>
            <div className={styles.tags}>
              {project.tags && project.tags.map((tag, i) => (
                <span className={styles.tag} key={i}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;