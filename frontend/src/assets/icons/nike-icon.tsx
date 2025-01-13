import React from 'react';
import Image from 'next/image';
import nikeSrc from '@/../public/nike.svg';

export const Nike = () => {
  return <Image src={nikeSrc} alt='nike' priority />;
};
