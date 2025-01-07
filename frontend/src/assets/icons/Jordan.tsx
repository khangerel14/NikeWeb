import jor from '@/../public/jordan.svg';
import Image from 'next/image';

type Props = Readonly<{
  size?: number;
}>;

export const Jordan = ({ size }: Props) => {
  return <Image src={jor.src} alt='jordan' width={size} height={size} />;
};
