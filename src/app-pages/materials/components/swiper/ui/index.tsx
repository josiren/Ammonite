'use client';

import { Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, SwiperSlideText, SwiperSlideBox } from './styled';
import { useEffect, useState, useMemo } from 'react';

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
      {slides.map(slide => {
        const isLastSlide = slideCount === 1;

        return (
          <SwiperSlide
            key={slide.id}
            isLastSlide={isLastSlide}
          >
            <SwiperSlideBox></SwiperSlideBox>
            <SwiperSlideText>{slide.text}</SwiperSlideText>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
