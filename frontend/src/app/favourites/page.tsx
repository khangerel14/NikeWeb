'use client';

import { FavouriteSection, Footer } from '@/features';
import ClothesContextProvider from '@/context/ClothesContext';

const Page = () => {
  return (
    <ClothesContextProvider>
      <FavouriteSection />
      <Footer />
    </ClothesContextProvider>
  );
};

export default Page;
