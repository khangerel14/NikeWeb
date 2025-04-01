'use client';

import { AvatarIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import ima from '../../public/images/wall.png';
import { Separator } from '@radix-ui/react-separator';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export const BasketSection = () => {
  const [isSelected, setIsSelected] = useState<{ [key: string]: boolean }>({});

  const handleSelect = (size: string) => {
    setIsSelected((prev) => ({
      ...prev,
      [size]: !prev[size], // Toggle selection
    }));
  };
  return (
    <div className='container flex items-start justify-between my-10'>
      <div className='flex items-start justify-between w-3/5'>
        <div className='flex flex-col gap-8'>
          <Image
            src={ima}
            alt='window'
            width={100}
            height={100}
            className='rounded-lg w-32'
          />
          <Image
            src={ima}
            alt='window'
            width={100}
            height={100}
            className='rounded-lg w-32'
          />
          <Image
            src={ima}
            alt='window'
            width={100}
            height={100}
            className='rounded-lg w-32'
          />
        </div>
        <Image
          src={ima}
          alt='window'
          width={100}
          height={100}
          className='w-4/6 rounded-lg'
        />
      </div>
      <div className='flex flex-col justify-start items-start w-3/5 h-screen'>
        <div className='flex flex-col gap-5'>
          <div className='flex items-center gap-3'>
            <AvatarIcon />
            <h3 className='font-normal text-3xl'>Erdenet Carpet</h3>
          </div>
          <div>
            <h1 className='font-bold text-3xl'>
              Souvenir Multicolor Hunnu Carpet
            </h1>
          </div>
        </div>
        <Separator
          orientation='horizontal'
          className='h-px bg-gray-300 w-full my-7'
        />
        <div className='flex flex-col gap-2 w-full'>
          <h3 className='font-bold'>€313.00</h3>
          <p className='text-gray-700 text-md font-normal'>
            Tax included. Shipping calculated at checkout.
          </p>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1.5'>
              <h2 className='font-bold'>Size</h2>
              <Button
                variant={'outline'}
                className='rounded-full w-80'
                style={{
                  backgroundColor: isSelected['feae'] ? 'gray' : 'white',
                }}
                onClick={() => handleSelect('feae')}
              >
                feae
              </Button>
              <Button
                variant={'outline'}
                className='rounded-full w-80'
                style={{ backgroundColor: isSelected['fe'] ? 'gray' : 'white' }}
                onClick={() => handleSelect('fe')}
              >
                fe
              </Button>
            </div>
            <div className='flex flex-col gap-3 w-full'>
              <h1 className='text-red-600 text-lg'>Out of Stock</h1>
              <div className='flex items-center justify-between gap-4'>
                <Button className='rounded-full w-full p-6' variant={'outline'}>
                  Add to Cart
                </Button>
                <Button className='rounded-full w-full p-6' variant={'outline'}>
                  Comparison
                </Button>
                <Button
                  className='rounded-full w-full p-6 text-white'
                  variant={'default'}
                >
                  Buy now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Separator
          orientation='horizontal'
          className='h-px bg-gray-300 w-full my-7'
        />
        <div className='flex flex-col gap-5'>
          <div className='flex gap-4 items-center'>
            <Button className='rounded-full' variant={'default'}>
              Item details
            </Button>
            <Button className='rounded-full' variant={'outline'}>
              Care instruction
            </Button>
            <Button className='rounded-full' variant={'outline'}>
              Culture explanation
            </Button>
          </div>
          <div>fe</div>
        </div>
      </div>
    </div>
  );
};
