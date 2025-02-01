'use client';

import { Footer, NavbarSection } from '@/features';
import ClothesContextProvider from '@/context/ClothesContext';
import {
  Paginations,
  CustomAccordion,
  CarouselSpacing,
  NavigationMenuDemo,
} from '@/components';

const Page = () => {
  return (
    <ClothesContextProvider>
      <NavbarSection />
      <NavigationMenuDemo />
      <CarouselSpacing />
      <Paginations />
      <CustomAccordion />
      <Footer />
    </ClothesContextProvider>
  );
};

export default Page;
