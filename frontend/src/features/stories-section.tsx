import { ReelView } from '@/components/custom-story';

export const StoriesSection = () => {
  return (
    <div className='container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5'>
      <ReelView />
    </div>
  );
};
