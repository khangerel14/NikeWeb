'use client';

import { BasketSection, Footer } from '@/features';
import ClothesContextProvider from '@/context/ClothesContext';

const Page = () => {
  return (
    <ClothesContextProvider>
      <BasketSection />
      <Footer />
    </ClothesContextProvider>
  );
};

export default Page;
