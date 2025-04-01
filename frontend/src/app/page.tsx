'use client';

import { Footer } from '@/features';
import ClothesContextProvider from '@/context/ClothesContext';
import {
  CustomAccordion,
  CarouselSpacing,
  NavigationMenuDemo,
} from '@/components';
import { TabsDemo } from '@/features/select-section';
// import { SidebarProvider } from '@/components/ui/sidebar';

const Page = () => {
  return (
    <ClothesContextProvider>
      <NavigationMenuDemo />
      <CarouselSpacing />
      {/* <SidebarProvider>
        <AppSidebar />
      </SidebarProvider> */}
      {/* <StoriesSection /> */}
      <TabsDemo />
      <CustomAccordion />
      <Footer />
    </ClothesContextProvider>
  );
};

export default Page;
