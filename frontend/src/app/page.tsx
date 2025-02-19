'use client';

import { Footer } from '@/features';
import ClothesContextProvider from '@/context/ClothesContext';
import {
  CustomAccordion,
  CarouselSpacing,
  NavigationMenuDemo,
} from '@/components';
import { TabsDemo } from '@/features/select-section';

const Page = () => {
  return (
    <ClothesContextProvider>
      <NavigationMenuDemo />
      <CarouselSpacing />
      {/* <StoriesSection /> */}
      <TabsDemo />
      <CustomAccordion />
      <Footer />
    </ClothesContextProvider>
  );
};

export default Page;
