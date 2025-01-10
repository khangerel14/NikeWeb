'use client';

import { Footer, Navbar } from '@/features';
import { Paginations } from '@/components';
import ClothesContextProvider from '@/context/ClothesContext';

const Page = () => {
  return (
    <ClothesContextProvider>
      <Navbar />
      <Paginations />
      <Footer />
    </ClothesContextProvider>
  );
};

export default Page;
