'use client';

import { Globe } from '@/assets/icons';
import { v4 as uuidv4 } from 'uuid';

type Ulti = {
  title: string;
  btn: string[];
};

const data: Ulti[] = [
  {
    title: 'Resources',
    btn: [
      'Gift Cards',
      'Find a Store',
      'Membership',
      'Nike x NBA',
      'Nike Journal',
      'Site Feedback',
    ],
  },
  {
    title: 'Help',
    btn: [
      'Gift Cards',
      'Find a Store',
      'Membership',
      'Nike x NBA',
      'Nike Journal',
      'Site Feedback',
    ],
  },
  {
    title: 'Company',
    btn: [
      'Gift Cards',
      'Find a Store',
      'Membership',
      'Nike x NBA',
      'Nike Journal',
      'Site Feedback',
    ],
  },
  {
    title: 'Promotions & Discounts',
    btn: [
      'Gift Cards',
      'Find a Store',
      'Membership',
      'Nike x NBA',
      'Nike Journal',
      'Site Feedback',
    ],
  },
];

export const Footer = () => {
  return (
    <div className='w-[1344px] flex flex-col mx-auto'>
      <hr />
      <div className='flex items-center w-full justify-between mt-16'>
        <div className='flex items-center w-full font-medium gap-2'>
          {data.map((e: Ulti) => {
            return (
              <div
                key={uuidv4()}
                className='flex flex-col gap-7 h-96 text-start items-start w-[259px]'
              >
                <button className='text-sm'>{e.title}</button>
                <div className='flex flex-col gap-2 items-start'>
                  {e.btn.map((buttonText) => (
                    <button key={uuidv4()} className='text-gray-500'>
                      {buttonText}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className='flex justify-end h-96'>
          <button className='text-gray-500 flex items-start h-14 gap-2 w-32 text-sm font-medium'>
            <Globe />
            United States
          </button>
        </div>
      </div>
      <div className='flex items-center gap-7 text-sm text-gray-600 font-medium'>
        <h1>© 2024 Nike, Inc. All Rights Reserved</h1>
        <select name='Guides' className='bg-white border-none'>
          <option value=''>Guides</option>
        </select>
        <button>Terms of Sale</button>
        <button>Terms of Use</button>
        <button>Nike Privacy Policy</button>
        <button>Your Privacy Choices</button>
        <button>CA Supply Chains Act</button>
      </div>
    </div>
  );
};
