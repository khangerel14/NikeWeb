'use client';

import { Footer, NavbarSection } from '@/features';
import ClothesContextProvider from '@/context/ClothesContext';

const Page = () => {
  return (
    <ClothesContextProvider>
      <NavbarSection />
      <Footer />
    </ClothesContextProvider>
  );
};

export default Page;
