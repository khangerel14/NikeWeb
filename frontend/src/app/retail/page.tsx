'use client';

import { Footer, Navbar } from '@/features';
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
