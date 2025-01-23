import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './GalleryModal.module.css';
import FullViewModal from './FullViewModal';

const GalleryModal = ({ project, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const isWebProject = project.tags.some(tag => 
    tag === 'Web Design' || 
    tag === 'Development Assistance' || 
    tag === 'Web Development'
  );

  const ProjectTitle = () => {
    if (isWebProject && project.websiteUrl) {
      return (
        <a 
          href={project.websiteUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.projectTitleLink}
        >
          {project.title}
        </a>
      );
    }
    return <h2 className={styles.projectTitle}>{project.title}</h2>;
  };

  return (
    <>
      <div className={styles.modalOverlay} onClick={onClose}>
        <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
          <button className={styles.closeButton} onClick={onClose}>&times;</button>
          <div 
            className={styles.mainImageWrapper} 
          >
            <Image 
              src={project.mainImage} 
              alt={project.title} 
              className={styles.mainImage}
              fill
              sizes="(max-width: 768px) 95vw, 800px"
              priority
              quality={90}
            />
          </div>
          <div className={styles.projectDetails}>
            <ProjectTitle />
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <div className={styles.gallery}>
              {project.images?.map((image, index) => (
                <div 
                  key={index} 
                  className={styles.galleryImageWrapper}
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className={styles.galleryImage}
                    fill
                    sizes="(max-width: 768px) 95vw, 800px"
                    quality={85}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {selectedImage && (
        <FullViewModal
          image={selectedImage}
          alt={project.title}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
};

export default GalleryModal;