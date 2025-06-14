'use client';

import { Footer } from '@/features';
import ClothesContextProvider from '@/context/ClothesContext';

const Page = () => {
  return (
    <ClothesContextProvider>
      <Footer />
    </ClothesContextProvider>
  );
};

export default Page;
