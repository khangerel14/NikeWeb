'use client';

import { Navbar, Footer, Card, Paginations } from '@/components';
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
