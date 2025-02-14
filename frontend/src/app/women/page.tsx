'use client';

import { Footer } from '@/features';
import { Paginations } from '@/components';
import ClothesContextProvider from '@/context/ClothesContext';

const Page = () => {
  return (
    <ClothesContextProvider>
      <Paginations />
      <Footer />
    </ClothesContextProvider>
  );
};

export default Page;
