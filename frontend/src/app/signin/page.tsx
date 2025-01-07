'use client';

import { SignIn } from '@/features';
import ClothesContextProvider from '@/context/ClothesContext';

const Page = () => {
  return (
    <ClothesContextProvider>
      <SignIn />
    </ClothesContextProvider>
  );
};

export default Page;
