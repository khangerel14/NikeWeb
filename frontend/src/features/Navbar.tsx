'use client';

import { Cart, Converse, Favourite, Jordan, Nike } from '@/assets/icons';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useContext } from 'react';
import { ClothesContext } from '@/context/ClothesContext';

export const Navbar = () => {
  const { values, setValues }: any = useContext(ClothesContext);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  console.log(values);

  const openOrNot = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <div className='flex flex-col'>
      <div className='flex items-center bg-gray-100 h-9'>
        <div className='flex justify-between container mx-auto'>
          <div className='flex items-center gap-6'>
            <button onClick={() => router.push('/jordan')}>
              <Jordan />
            </button>
            <button onClick={() => router.push('/converse')}>
              <Converse />
            </button>
          </div>
          <div className='flex items-center gap-3 text-xs font-semibold'>
            <button
              className='hover:text-gray-500 border-black pr-3 border-r'
              onClick={() => router.push('/retail')}
            >
              Find a Store
            </button>
            <button
              className='hover:text-gray-500 border-black pr-3 border-r'
              onClick={() => router.push('/help')}
            >
              Help
            </button>
            <button
              className='hover:text-gray-500 border-black pr-3 border-r'
              onClick={() => router.push('/membership')}
            >
              Join Us
            </button>
            <button
              className='hover:text-gray-500'
              onClick={() => router.push('/signin')}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
      <div className='bg-white'>
        <div className='flex justify-between container items-center mx-auto h-14'>
          <div>
            <button onClick={() => router.push('/')}>
              <Nike />
            </button>
          </div>
          <div className='flex items-center gap-6 text-md pl-44 font-semibold'>
            <button onClick={() => router.push('/new')}>New</button>
            <button onClick={() => router.push('/men')}>Men</button>
            <button onClick={() => router.push('/women')}>Women</button>
            <button onClick={() => router.push('/kids')}>Kids</button>
            <button onClick={() => router.push('/jordan')}>Jordan</button>
            <button onClick={() => router.push('/sales')}>Sale</button>
            <button onClick={openOrNot}>openOrnot</button>
          </div>
          <div className='flex items-center gap-4'>
            <input
              type='search'
              className='p-1 w-[170px] px-2 bg-gray-100 rounded-full outline-none'
              placeholder='Search...'
              value={values}
              onChange={(e) => setValues(e.target.value)}
            />
            <button
              className='flex justify-center items-center hover:bg-gray-200 h-8 w-8 rounded-full'
              onClick={() => router.push('/favourites')}
            >
              <Favourite />
            </button>
            <button
              className='flex justify-center items-center hover:bg-gray-200 h-8 w-8 rounded-full'
              onClick={() => router.push('/cart')}
            >
              <Cart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
