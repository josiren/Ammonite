import styled from 'styled-components';

import { motion } from 'framer-motion';

import { Fonts } from '@/shared/ui/styles/fonts';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper as SwiperContainer, SwiperSlide as SwiperSlideItem } from 'swiper/react';

const { inter } = Fonts;

export const Swiper = styled(SwiperContainer)`
  height: 37.396vw;
  padding-top: 73px;
  padding-right: 141px;

  .swiper-pagination-progressbar {
    background: transparent;
    border-radius: 18px;
    border: 1px solid white;
    backdrop-filter: blur(9.3px);
    width: 95%;
    height: 11px;
  }

  .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    background: white;
    border-radius: 18px;
  }
`;

interface SwiperSlideProps {
  islastslide?: boolean;
}

export const SwiperSlide = styled(SwiperSlideItem)<SwiperSlideProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: ${e => (e.islastslide ? '100%' : '25.573vw')};
  max-width: ${e => (e.islastslide ? '100%' : '25.573vw')};
  gap: 30px;
`;

export const SwiperSlideBox = styled(motion.div)`
  border: 1px solid white;
  border-radius: 41.54px;
  height: 100%;
`;

export const SwiperSlideText = styled.h3`
  letter-spacing: 2px;
  text-align: center;
  font-size: 0.978vw;
  font-family: ${inter.style.fontFamily};
  text-transform: uppercase;
`;
