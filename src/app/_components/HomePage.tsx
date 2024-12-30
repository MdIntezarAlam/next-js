'use client';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

export default function HomePage() {
  const router = useRouter();
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <h1 className='text-6xl font-bold'>Mrs Md Imran Khan</h1>
      <h1 className='text-6xl font-bold'>Welcome to my Next.js app</h1>
      <p className='text-2xl'>This is a simple page that displays a message.</p>
      <Button
        variant={'destructive'}
        className='h-10 w-[15%] rounded-full'
        onClick={() =>
          router.push(
            'https://nextjs.org/docs/app/getting-started/installation'
          )
        }
      >
        Next Js App/Router
      </Button>
    </div>
  );
}
