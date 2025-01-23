'use client';

import { Footer, NavbarSection } from '@/features';
import ClothesContextProvider from '@/context/ClothesContext';
import { Paginations, CustomAccordion, CarouselSpacing } from '@/components';

const Page = () => {
  return (
    <ClothesContextProvider>
      <NavbarSection />
      <CarouselSpacing />
      <Paginations />
      <CustomAccordion />
      <Footer />
    </ClothesContextProvider>
  );
};

export default Page;
