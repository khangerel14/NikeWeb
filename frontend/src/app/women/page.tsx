'use client';

import { Footer, NavbarSection } from '@/features';
import { Paginations } from '@/components';
import ClothesContextProvider from '@/context/ClothesContext';

const Page = () => {
  return (
    <ClothesContextProvider>
      <NavbarSection />
      <Paginations />
      <Footer />
    </ClothesContextProvider>
  );
};

export default Page;
