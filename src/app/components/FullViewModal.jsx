import Image from 'next/image';
import styles from './FullViewModal.module.css';

const FullViewModal = ({ image, alt, onClose }) => {
  return (
    <div className={styles.fullViewOverlay} onClick={onClose}>
      <button className={styles.closeButton} onClick={onClose}>&times;</button>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt={alt}
            fill
            className={styles.fullImage}
            sizes="100vw"
            quality={95}
          />
        </div>
      </div>
    </div>
  );
};

export default FullViewModal;