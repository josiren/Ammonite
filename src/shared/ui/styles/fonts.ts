import { Chenla, Inter } from 'next/font/google';

const chenla = Chenla({
  subsets: ['khmer'],
  weight: '400',
});

const inter = Inter({
  subsets: ['cyrillic'],
  weight: ['300'],
});

export const Fonts = {
  chenla,
  inter,
};
