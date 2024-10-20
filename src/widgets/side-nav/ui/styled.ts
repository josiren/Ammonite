'use client';

import styled from 'styled-components';
import Link from 'next/link';

import { Fonts } from '@/shared/ui/styles/fonts';

const { inter } = Fonts;

export const Logo = styled(Link)`
  display: flex;
  gap: 17px;
  margin-left: 7px;
  align-items: center;

  h1 {
    font-size: 29.21px;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-family: ${inter.style.fontFamily};
  }
`;

export const Line = styled.div`
  position: relative;
  width: 95%;
  height: 5px;
  margin-top: 19.18px;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: #1a1a1a;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 31px;
  margin-left: 68px;
  margin-top: 14px;
  font-family: ${inter.style.fontFamily};
  font-size: 17px;
  letter-spacing: 3px;
`;
