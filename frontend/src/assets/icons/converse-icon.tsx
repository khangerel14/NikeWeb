import Conver from '@/../public/converse.svg';
import Image from 'next/image';

export const Converse = () => {
  return (
    <Image
      src={Conver}
      alt='converse'
      width={0}
      height={0}
      style={{ width: '34px', height: 'auto' }}
    />
  );
};
