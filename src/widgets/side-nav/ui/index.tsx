'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import Image from 'next/image';

import logoImage from '@/shared/assets/logo.svg';

import { Line, Logo, Nav } from './styled';

export const SideNav = () => {
  return (
    <motion.div
      className="flex-none flex-col md:w-[22.875rem] hidden lg:flex bg-[rgba(19,19,19,0.3)] blur-[9.9] mt-[13px] ml-[10px] mb-[58px] rounded-[18px]"
      initial={{ opacity: 0, translateX: '-6%', translateY: '-2%' }}
      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ type: 'tween', ease: 'easeIn', duration: 0.3 }}
    >
      <Logo href="/">
        <Image
          src={logoImage}
          alt="logo"
          loading="eager"
          priority
        />
        <h1>ammonite</h1>
      </Logo>
      <Line />
      <Nav>
        <ul>
          <li>
            <Link href="/materials">Материалы</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/projects">Проекты</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/about">О нас</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/gallery">Галлерея Работ</Link>
          </li>
        </ul>
      </Nav>
    </motion.div>
  );
};
