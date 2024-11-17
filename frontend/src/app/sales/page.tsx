'use client';

import { Footer, Navbar } from '@/components';
import ClothesContextProvider from '@/context/ClothesContext';

const Page = () => {
  return (
    <ClothesContextProvider>
      <Navbar />
      <Footer />
    </ClothesContextProvider>
  );
};

export default Page;
