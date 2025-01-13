'use client';

import { NavbarSection, SignIn } from '@/features';
import ClothesContextProvider from '@/context/ClothesContext';

const Page = () => {
  return (
    <ClothesContextProvider>
      <NavbarSection />
      <SignIn />
    </ClothesContextProvider>
  );
};

export default Page;
