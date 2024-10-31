'use client';

import { Card, Footer, Navbar } from '@/components';
import ClothesContextProvider from '@/context/ClothesContext';

const Page = () => {
  return (
    <ClothesContextProvider>
      <Navbar />
      <Card />
      <Footer />
    </ClothesContextProvider>
  );
};

export default Page;
