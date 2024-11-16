'use client';

import { Card, Paginations } from '@/components';
import { Footer, Navbar } from '@/features';
import ClothesContextProvider from '@/context/ClothesContext';

const Page = () => {
  return (
    <ClothesContextProvider>
      <Navbar />
      <Card />
      <Paginations />
      <Footer />
    </ClothesContextProvider>
  );
};

export default Page;
