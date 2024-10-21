import type { Metadata } from 'next';
import { Root } from '@/shared';
import { SideNav } from '@/widgets';

export const metadata: Metadata = {
  title: 'Главная',
  description:
    'This project showcases exclusive building materials through a curated collection of examples and case studies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Root>
      <html lang="en">
        <body className={`antialiased scroll-smooth`}>
          <div className="flex gap-[83px] h-screen flex-row">
            <div className="flex-none flex-col md:w-[22.875rem] hidden lg:flex bg-[rgba(19,19,19,0.3)] blur-[9.9] mt-[13px] ml-[10px] mb-[58px] rounded-[18px]">
              <SideNav />
            </div>
            <div className="flex-grow h-[100dvh] pt-[78px] p-[0px calc(0px + 1.3541666667vw);] lg:overflow-y-auto pb-[58px]">
              {children}
            </div>
          </div>
        </body>
      </html>
    </Root>
  );
}
