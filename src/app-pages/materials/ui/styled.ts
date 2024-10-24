import styled from 'styled-components';

import { Fonts } from '@/shared/ui/styles/fonts';
import { motion } from 'framer-motion';
const { inter, chenla } = Fonts;

export const ProductsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(410px, 633px));
  gap: 92px 81px;

  @media (width <= 1600px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const ProductItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  max-height: 663px;
  min-height: 251.66px;
  padding: 31px 37px 36.6px;
  width: 100%;
  border-radius: 38px;
  background-color: var(--product-background);
`;

export const ProductItemText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 21px;
  align-items: center;
  height: 68.5px;
  font-family: ${chenla.style.fontFamily};
  letter-spacing: 9px;

  p {
    font-size: 2.54vw;

    @media (width <= 768px) {
      font-size: 22px;
    }
  }

  span {
    font-size: 2.43vw;
    font-family: ${inter.style.fontFamily};

    @media (width <= 768px) {
      font-size: 22px;
    }
  }
`;

export const ProductItemButton = styled.button`
  background-color: #9cff8c;
  border-radius: 29px;
  height: 72px;
  font-size: 36px;
  font-family: ${inter.style.fontFamily};
  text-transform: uppercase;
  color: black;
  flex-basis: 45%;
  letter-spacing: 3px;
`;

export const ProductImage = styled.div`
  border-radius: 28.49px;
  height: 497px;
  background-color: var(--product-image-background);

  @media (width <= 768px) {
    height: 197.9px;
  }
`;

export const Line = styled.div`
  position: relative;
  width: 4px;
  height: 100%;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: #656565;
    position: absolute;
    left: 0;
    top: 0;
  }
`;
