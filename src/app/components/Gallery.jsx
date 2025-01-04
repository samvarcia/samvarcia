"use client";

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Mousewheel } from 'swiper/modules';
import styles from './Gallery.module.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/mousewheel';

const Gallery = ({ images }) => {
  // Function to handle image load and determine orientation
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
        slidesPerView="auto"
        speed={250}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 1,
          depth: 300,
          modifier: 5,
          slideShadows: false,
        }}
        mousewheel={{
          forceToAxis: false,
          sensitivity: 1,
        }}
        spaceBetween={150}
        freeMode={true}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className={styles.item}>
            <div className={styles.slideContent}>
              <img 
                src={src} 
                alt={`Image ${index + 1}`} 
                loading="eager"
                onLoad={handleImageLoad}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;