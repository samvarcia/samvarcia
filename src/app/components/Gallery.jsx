"use client";

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
import styles from './Gallery.module.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
const Gallery = ({ images }) => {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        // loop={true}
        speed={200}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 1,
          depth: 200,
          modifier: 2,
          slideShadows: false,
        }}
        mousewheel={true}
        spaceBetween={150}
        
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className={styles.item}>
            <div className={styles.slideContent}>
              <img 
                src={src} 
                alt={`Image ${index + 1}`} 
                loading="eager"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;