// Gallery.jsx
"use client";

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Mousewheel } from 'swiper/modules';
import styles from './Gallery.module.css';
import GalleryModal from './GalleryModal';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/mousewheel';

const Gallery = ({ projects }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleImageLoad = (e) => {
    const img = e.target;
    const isVertical = img.naturalHeight > img.naturalWidth;
    img.setAttribute('data-orientation', isVertical ? 'vertical' : 'horizontal');
  };

  return (
    <div className={styles.container}>
      <Swiper
        modules={[EffectCoverflow, Autoplay, Mousewheel]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        speed={280}
        direction={isMobile ? 'vertical' : 'horizontal'}
        autoplay={{
          delay: 11000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: isMobile ? 0 : 0,
          stretch: isMobile ? 3 : 1,
          depth: isMobile ? 40 : 100,
          modifier: isMobile ? 9 : 8,
          slideShadows: false,
        }}
        mousewheel={{
          forceToAxis: false,
          sensitivity: 1,
        }}
        spaceBetween={isMobile ? 40 : 150}
        freeMode={false}
        className={isMobile ? styles.mobileSwiper : ''}
      >
        {projects.map((project, index) => (
          <SwiperSlide 
            key={index} 
            className={styles.item}
            onClick={() => setSelectedProject(project)}
          >
            <div className={styles.slideContent}>
              <img 
                src={project.mainImage} 
                alt={project.title}
                loading="eager"
                onLoad={handleImageLoad}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedProject && (
        <GalleryModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Gallery;