import React, { useEffect, useState } from 'react';
import getFish from '@/lib/getFish';
import { useRouter } from 'next/router';
import Link from 'next/link';

type Fish = {
    name: string;
    img_src_set: {
      '2x': string;
    };
    url: string;
  };

export default function Index() {
  const router = useRouter();
  const currentUrl = router.asPath;
  const newUrl = currentUrl.replace(/ /g, "");
  console.log(newUrl)
  const [fishData, setFishData] = useState<Fish[] | null>(null);

  const fetchData = async () => {

    const fetchFishData = await getFish(currentUrl);
    console.log(fetchFishData)
    setFishData(fetchFishData);


  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      { fishData ? (
        <div className='details-page-layout'>
          <Link className='button-box' href="/fish">Go Back</Link>
          <h2 className="name-text">{fishData[0].name}</h2>
          <img className='image-full' src={fishData[0].img_src_set['2x']} alt={fishData[0].name} />
          <a className='button-box' href={fishData[0].url} target=".">Link to wiki page</a>
          <br />

        </div>
      ) : (
            <p>Loading...</p>
      )}
    </div>
  );
}