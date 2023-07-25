import type { Metadata } from 'next'
import getAllFish from '@/lib/getAllFishes'
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Fishes',
}

export default async function FishPage() {
    const fishData: Promise<Fish[]> = getAllFish()


    const fishes = await fishData


    const content = (
        <section>
            <br />
            <div className='button-center'>

                <button className='button-box' >
                    <a href='/fish'>
                        Generate More Fish
                    </a>
                </button>
            </div>
            <br />

            <div  className='fish-select-page-layout'>
                {Array.from({ length: 3 }).map((_, index) => {
                    const randomFish = fishes[Math.floor(Math.random() * 1100)];
                    console.log(randomFish.id)

                    return (
                        <div key={randomFish.id}>
                            <Link href={`/fish/${randomFish.name}`}>
                                <p>
                                    {randomFish.name}
                                </p>
                                <img className='image-small' src={randomFish.img_src_set['2x']} alt='[[[ IMAGE NOT AVAIABLE ]]]' />
                            </Link>
                            <br />
                        </div>
                    )
                })}
            </div>
            

        </section>
    )

    return content
}