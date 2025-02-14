import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';

export const SelectSection = () => {
  return (
    <div className='flex flex-col items-center container'>
      <Tabs defaultValue='account' className='w-[400px]'>
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger className='px-10' value='account'>
            Account
          </TabsTrigger>
          <TabsTrigger className='px-10' value='password'>
            Password
          </TabsTrigger>
        </TabsList>
        <TabsContent value='account'>
          <Card>Make changes to your account here.</Card>
        </TabsContent>
        <TabsContent value='password'>
          <Card>Change your password here. </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
