'use client';

import { Footer, HelpSection } from '@/features';
import ClothesContextProvider from '@/context/ClothesContext';

const Page = () => {
  return (
    <ClothesContextProvider>
      <HelpSection />
      <Footer />
    </ClothesContextProvider>
  );
};

export default Page;
