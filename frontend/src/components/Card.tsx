'use client';

import { useContext } from 'react';
import { ClothesContext } from '@/context/ClothesContext';

export const Card = () => {
  const { clothesData, values } = useContext(ClothesContext) || {};
  return (
    <div className='flex container justify-between items-center mx-auto my-20 h-fit flex-wrap gap-5'>
      {(clothesData || [])
        .slice(0, 8)
        .filter((elem: any) =>
          elem.title?.toLowerCase().includes(values?.toLowerCase())
        )
        .map((elem: any) => {
          return (
            <div
              className='relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md pt-6'
              key={elem.id}
            >
              <div className='relative mx-4 -mt-6 h-64 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600 hover:scale-110 transition ease-out'>
                {elem.images.map((imageUrl: string, index: number) => (
                  <img
                    key={index}
                    src={imageUrl}
                    alt={`Image ${index + 1}`}
                    className='hover:scale-110 transition ease-in-out'
                  />
                ))}
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
                  data-ripple-light='true'
                  type='button'
                  className='select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                >
                  Add to Cart
                </button>
                <p className='text-lg font-bold'>{elem.price}0000₮</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};
