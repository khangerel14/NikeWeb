import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { v4 as uuid } from 'uuid';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function CarouselSpacing() {
  return (
    <Carousel className='w-full container mx-auto py-10'>
      <CarouselContent className='-ml-1 w-full'>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={uuid()} className='pl-1 md:basis-1/2 lg:basis-1/3'>
            <div className='p-1'>
              <Card className='w-[440px]'>
                <CardContent className='flex aspect-square items-center justify-center p-6'>
                  <span className='text-2xl font-semibold'>{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
