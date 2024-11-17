'use client';

import { Card, Paginations, Footer, Navbar } from '@/components';
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
