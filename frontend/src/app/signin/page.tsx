'use client';

import { Navbar, SignIn } from '@/features';
import ClothesContextProvider from '@/context/ClothesContext';

const Page = () => {
  return (
    <ClothesContextProvider>
      <Navbar />
      <SignIn />
    </ClothesContextProvider>
  );
};

export default Page;
