'use client';

import { Card, Footer, Navbar, Paginations } from '@/components';
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
