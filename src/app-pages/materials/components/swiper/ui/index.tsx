'use client';

import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, SwiperSlideText, SwiperSlideBox } from './styled';

export const SwiperComponent = () => {
  const slides = useMemo(
    () => [
      { id: 1, text: 'ammonite грунтовка адгезионная' },
      { id: 2, text: 'ammonite грунтовка адгезионная' },
      { id: 3, text: 'ammonite грунтовка адгезионная' },
      { id: 4, text: 'ammonite грунтовка адгезионная' },
    ],
    []
  );

  const [slideCount, setSlideCount] = useState(slides.length);

  useEffect(() => {
    setSlideCount(slides.length);
  }, [slides]);

  return (
    <Swiper
      modules={[Pagination, Mousewheel]}
      spaceBetween={114}
      slidesPerView={2.485}
      pagination={{
        type: 'progressbar',
      }}
      mousewheel={true}
    >
      <motion.div
        initial={{ opacity: 0, translateY: '-10%' }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'tween', ease: 'easeIn', duration: 0.3, delay: 0.2 }}
      >
        {slides.map((slide, index) => {
          const isLastSlide = slideCount === 1;

          return (
            <SwiperSlide
              key={slide.id}
              data-islastslide={isLastSlide}
            >
              <SwiperSlideBox
                initial={{ opacity: 0, translateX: '-6%', translateY: '-8%', scale: 0.9 }}
                animate={{ opacity: 1, translateX: 0, translateY: 0, scale: 1 }}
                transition={{ type: 'tween', easeIn: 'easeIn', duration: 0.5 * (index + 1) }}
              ></SwiperSlideBox>

              <motion.div
                initial={{ opacity: 0, translateY: '-10%' }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'tween',
                  ease: 'easeIn',
                  delay: 0.2,
                  duration: 0.5 * (index + 1),
                }}
                style={{
                  margin: '0 auto',
                  maxWidth: '60%',
                }}
              >
                <SwiperSlideText>{slide.text}</SwiperSlideText>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </motion.div>
    </Swiper>
  );
};
