import type { Metadata } from 'next'
import getAllFish from '@/lib/getAllFishes'
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Fishes',
}

export default async function UsersPage() {
    const fishData: Promise<Fish[]> = getAllFish()

    const fishes = await fishData

    function getRandomInt() {
        return Math.floor(Math.random() * 1100);
      }
    

    const content = (
        <section>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>
            <br />
            <p>
                {getRandomInt()}
            </p>
            
            {Array.from({ length: 3 }).map((_, index) => {
                const randomIndex = getRandomInt();
                const randomFish = fishes[randomIndex];

                return (
                    <>
                        <Link href={`/fish/${randomFish.id}`}>
                            <p key={randomFish.id}>
                                {randomFish.name}
                            </p>
                            <img src={randomFish.img_src_set['2x']} alt='[[[ IMAGE NOT AVAIABLE ]]]' />
                        </Link>
                        <br />
                    </>
                )
            })}
            
            <h2>
                <Link href="/">Generate More Fish</Link>
            </h2>
            <br />
        </section>
    )

    return content
}