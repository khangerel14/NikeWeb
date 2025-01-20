'use client';

import { Footer, NavbarSection } from '@/features';
import { Paginations } from '@/components';
import { CarouselSpacing } from '@/components/carousel';
import ClothesContextProvider from '@/context/ClothesContext';

const Page = () => {
  return (
    <ClothesContextProvider>
      <NavbarSection />
      <CarouselSpacing />
      {/* <Card /> */}
      <Paginations />
      <Footer />
    </ClothesContextProvider>
  );
};

export default Page;
