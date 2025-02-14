import { Card } from './ui/card';

export const CustomStory = () => {
  return <div>fa</div>;
};

export const ReelView = () => {
  return (
    <Card className='flex flex-col p-4 h-96'>
      <video
        width='320'
        height='240'
        controls
        preload='none'
        autoPlay
        aria-label='Video with English subtitles'
        className='mb-4'
      >
        <track
          src='/captions/english.vtt'
          kind='captions'
          srcLang='en'
          label='English'
          default
        />
        <track
          src='/subtitles/english.vtt'
          kind='subtitles'
          srcLang='en'
          label='English'
          default
        />
        <source src='/videos/855289-hd_1920_1080_25fps.mp4' type='video/mp4' />
      </video>
      <div className='flex gap-3 mb-3'>{/* Add content here if needed */}</div>
      <div className='flex gap-3 flex-col'></div>
    </Card>
  );
};
