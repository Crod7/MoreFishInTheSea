import React, { useEffect, useState } from 'react';
import getAllFish from '@/lib/getAllFishes';
import Link from 'next/link';

export default function Index() {
  const [randFish1, setRandFish1] = useState(null);
  const [randFish2, setRandFish2] = useState(null);
  const [randFish3, setRandFish3] = useState(null);


  const fetchData = async () => {
    const fishData = await getAllFish();
    setRandFish1(fishData[Math.floor(Math.random() * 1100)]);
    setRandFish2(fishData[Math.floor(Math.random() * 1100)]);
    setRandFish3(fishData[Math.floor(Math.random() * 1100)]);

  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {randFish1 && randFish2 && randFish3 ? (
        <div className='fish-select-page-layout'>
            <div>
                <Link href={`/fish/${randFish1.name}`}>
                <p>{randFish1.name}</p>
                <img className='image-small' src={randFish1.img_src_set['2x']} alt='[[[ IMAGE NOT AVAILABLE ]]]' />
                </Link>
            </div>
            <div>
                <Link href={`/fish/${randFish2.name}`}>
                <p>{randFish2.name}</p>
                <img className='image-small' src={randFish2.img_src_set['2x']} alt='[[[ IMAGE NOT AVAILABLE ]]]' />
                </Link>
            </div>
            <div>
                <Link href={`/fish/${randFish3.name}`}>
                <p>{randFish3.name}</p>
                <img className='image-small' src={randFish3.img_src_set['2x']} alt='[[[ IMAGE NOT AVAILABLE ]]]' />
                </Link>
            </div>
        </div>
      ) : (
            <p>Loading...</p>
      )}
    </div>
  );
}