'use client';

import { Footer, Navbar } from '@/features';
import { Card, Paginations } from '@/components';
import { CarouselDemo } from '@/components/carousel';
import ClothesContextProvider from '@/context/ClothesContext';

const Page = () => {
  return (
    <ClothesContextProvider>
      <Navbar />
      <CarouselDemo />
      <Card />
      <Paginations />
      <Footer />
    </ClothesContextProvider>
  );
};

export default Page;
