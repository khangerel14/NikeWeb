import { Jordan, Nike } from '@/assets/icons';

export const SignIn = () => {
  return (
    <div className='container w-[520px] mx-auto'>
      <div className='flex flex-col gap-9 mt-2'>
        <div className='flex'>
          <Nike />
          <Jordan size={40} />
        </div>
        <h1 className='text-3xl font-normal'>
          Enter your email to join us or sign in.
        </h1>
        <div className='flex gap-2 items-center'>
          <p>Mongolia</p>
          <button className='text-gray-500 underline'>Change</button>
        </div>
        <input
          type='text'
          placeholder='Email*'
          className='border w-full p-4 rounded-md border-black outline-none'
        />
        <p className='text-gray-500'>
          By continuing, I agree to Nike’s
          <span className='underline pl-1'>Privacy Policy</span> and
          <span className='underline pl-1'>Terms of Use.</span>
        </p>
        <div className='flex justify-end'>
          <button className='p-3 px-6 rounded-full bg-black text-white w-fit font-medium'>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
