// GalleryModal.jsx
import { useEffect } from 'react';
import styles from './GalleryModal.module.css';

const GalleryModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        <img 
          src={project.mainImage} 
          alt={project.title} 
          className={styles.mainImage}
        />
        <div className={styles.projectDetails}>
          <h2 className={styles.projectTitle}>{project.title}</h2>
          <p className={styles.projectDescription}>{project.description}</p>
          <div className={styles.tags}>
            {project.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>{tag}</span>
            ))}
          </div>
          <div className={styles.gallery}>
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className={styles.galleryImage}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;