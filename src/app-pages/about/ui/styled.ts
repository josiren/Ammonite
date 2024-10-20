'use client';

import styled from 'styled-components';

import { Fonts } from '@/shared/ui/styles/fonts';
import { motion } from 'framer-motion';

const { inter } = Fonts;

export const AboutText = styled(motion.div)`
  text-transform: uppercase;
  font-size: 5.208vw;
  font-family: ${inter.style.fontFamily};
  letter-spacing: 3px;
`;

export const AboutTextBlock = styled(motion.div)`
  margin-top: 27px;
  background-color: #131313;
  padding: 39px 15px 72px 23px;
  border-radius: 38px;
  margin-right: 42px;
  font-family: ${inter.style.fontFamily};
  font-size: 1.3141vw;
  line-height: 31px;
`;
