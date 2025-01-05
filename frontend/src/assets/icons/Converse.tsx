import Conver from '@/../public/converse.svg';
import Image from 'next/image';

export const Converse = () => {
  return <Image src={Conver.src} alt='converse' width={34} height={34} />;
};
