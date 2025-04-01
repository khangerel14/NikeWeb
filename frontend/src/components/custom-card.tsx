'use client';

import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { ClothesContext } from '@/context/ClothesContext';
import { v4 as uuidv4 } from 'uuid';

type ProductProps = Readonly<{
  id: number;
  images: string[];
  title: string;
  description: string;
  price: number;
}>;

export const CustomCard = () => {
  const { clothesData = [], values = '' } = useContext(ClothesContext) || {};
  const [currentImageIndex, setCurrentImageIndex] = useState<number[]>([]);

  useEffect(() => {
    setCurrentImageIndex(clothesData.map(() => 0));

    const updateImageIndex = (index: number, imagesLength: number) => {
      setCurrentImageIndex((prevIndex) => {
        const newIndex = [...prevIndex];
        if (imagesLength > 0) {
          newIndex[index] = (newIndex[index] + 1) % imagesLength;
        }
        return newIndex;
      });
    };

    const intervalIds = clothesData.map((elem: ProductProps, index: number) => {
      return setInterval(() => {
        updateImageIndex(index, elem.images.length);
      }, 4000);
    });

    return () => {
      intervalIds.forEach(clearInterval);
    };
  }, [clothesData]);

  return (
    <div className='grid container xl:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-auto my-20 gap-4'>
      {clothesData
        .slice(0, 8)
        .filter((elem: ProductProps) =>
          elem.title?.toLowerCase().includes(values.toLowerCase())
        )
        .map((elem: ProductProps, idx: number) => (
          <div
            className='relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md pt-6'
            key={elem.id}
          >
            <div className='relative mx-4 -mt-6 h-64 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-linear-to-r from-blue-500 to-blue-600 hover:scale-110 transition ease-out'>
              {elem.images.length > 0 &&
              elem.images[currentImageIndex[idx]] &&
              elem.images[currentImageIndex[idx]] !== '' ? (
                <Image
                  key={uuidv4()}
                  src={`/${elem.images[currentImageIndex[idx]]}`}
                  alt={`Image ${idx + 1}`}
                  className='hover:scale-110 transition ease-in-out'
                  layout='responsive'
                  width={200}
                  height={200}
                  objectFit='cover'
                />
              ) : (
                <div className='w-full h-full bg-gray-300 flex justify-center items-center text-white'>
                  No Image Available
                </div>
              )}
            </div>
            <div className='p-6'>
              <h5 className='mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased overflow-hidden h-6'>
                {elem.title}
              </h5>
              <p className='block font-sans text-base font-light leading-relaxed text-inherit antialiased overflow-hidden h-14'>
                {elem.description}...
              </p>
            </div>
            <div className='flex items-center justify-between p-6 pt-0'>
              <button
                type='button'
                className='select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              >
                Add to Cart
              </button>
              <p className='text-lg font-bold'>
                {elem.price.toLocaleString()}₮
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};
