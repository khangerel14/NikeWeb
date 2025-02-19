import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Separator } from '@radix-ui/react-separator';

export const FavouriteSection = () => {
  return (
    <div className='container flex justify-center mt-14'>
      <Card className='max-w-[800px] w-full'>
        <CardTitle className='flex justify-between border-b-1 border-black p-5 items-center'>
          Favorite
          <Button className='w-fit' variant={'ghost'} color={'blue'}>
            View all
          </Button>
        </CardTitle>
        <Separator orientation='horizontal' className='bg-gray-300 h-px' />
        <CardContent className='p-5 h-fit grid grid-cols-3'>Cfhp</CardContent>
      </Card>
    </div>
  );
};
