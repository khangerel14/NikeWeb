'use client';

import { Cart, Converse, Favourite, Jordan, Nike } from '@/assets/icons';
import { Separator } from '@/components/ui/separator';
import { ClothesContext } from '@/context/ClothesContext';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

export const NavbarSection = () => {
  const router = useRouter();
  const context = useContext(ClothesContext);

  if (!context) {
    throw new Error('Navbar must be used within a ClothesContextProvider');
  }

  const { values, setValues } = context;

  return (
    <div className='flex flex-col'>
      <div className='bg-gray-100'>
        <div className='flex justify-between items-center container h-9'>
          <div className='flex items-center gap-6'>
            <button onClick={() => router.push('/jordan')}>
              <Jordan size={24} />
            </button>
            <button onClick={() => router.push('/converse')}>
              <Converse />
            </button>
          </div>
          <div className='flex items-center gap-3 text-xs font-semibold'>
            <button
              className='hover:text-gray-500'
              onClick={() => router.push('/retail')}
            >
              Find a Store
            </button>
            <Separator orientation='vertical' className='h-3 bg-black' />
            <button
              className='hover:text-gray-500'
              onClick={() => router.push('/help')}
            >
              Help
            </button>
            <Separator orientation='vertical' className='h-3 bg-black' />
            <button
              className='hover:text-gray-500'
              onClick={() => router.push('/membership')}
            >
              Join Us
            </button>
            <Separator orientation='vertical' className='h-3 bg-black' />
            <button
              className='hover:text-gray-500'
              onClick={() => router.push('/sign-in')}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
      <div className='bg-white'>
        <div className='flex justify-between items-center container h-14'>
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
