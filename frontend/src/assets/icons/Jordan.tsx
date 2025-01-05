import jor from '@/../public/jordan.svg';
import Image from 'next/image';

export const Jordan = () => {
  return <Image src={jor.src} alt='jordan' width={20} height={20} />;
};
