'use client';

import { Footer, NavbarSection } from '@/features';
import { Card, Paginations } from '@/components';
import { CarouselDemo } from '@/components/carousel';
import ClothesContextProvider from '@/context/ClothesContext';

const Page = () => {
  return (
    <ClothesContextProvider>
      <NavbarSection />
      <CarouselDemo />
      <Card />
      <Paginations />
      <Footer />
    </ClothesContextProvider>
  );
};

export default Page;
