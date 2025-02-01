'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  return (
    <div className='flex items-center justify-center h-screen w-full bg-white flex-col gap-5'>
      <h1 className='text-5xl font-extrabold'>404 Page Not Found</h1>
      <p className='text-gray-600 font-normal'>
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Button
        variant={'outline'}
        className='p-3 px-6 text-base font-medium'
        onClick={() => router.push('/')}
      >
        Return to website
      </Button>
    </div>
  );
};

export default Page;
