import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const [count, setCount] = useState<number>(0);

  const fetchCount = async () => {
    const response = await fetch('http://localhost:3001/api/counter');
    const data = await response.json();
    setCount(data.count);
  };

  const incrementCount = async () => {
    const response = await fetch(
      'http://localhost:3001/api/counter/increment',
      {
        method: 'POST',
      },
    );
    const data = await response.json();
    setCount(data.count);
  };

  useEffect(() => {
    fetchCount();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="text-center">
     
        <h1 className="mb-8 text-4xl font-bold text-black">Counter: {count}</h1>
        <Button onClick={incrementCount} className="px-8 py-6 text-xl">
          Increment Counter
        </Button>
      </div>
    </div>
  );
}
