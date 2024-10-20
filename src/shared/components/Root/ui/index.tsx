'use client';

import '@/shared/ui/styles/globals.css';
import { StyledComponentsRegistry } from '@/shared';

export const Root = ({ children }: { children: React.ReactNode }) => {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
};
