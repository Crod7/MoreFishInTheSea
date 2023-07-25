import type { Metadata } from 'next'
import getAllFish from '@/lib/getAllFishes'
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Users',
}

export default async function UsersPage() {
    const fishData: Promise<Fish[]> = getAllFish()

    const fishes = await fishData

    const content = (
        <section>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>
            <br />
            {fishes.map(fish => {
                return (
                    <>
                        <p key={fish.id}>
                            <Link href={`/fish/${fish.id}`}>{fish.name}</Link>
                        </p>
                        <br />
                    </>
                )
            })}
        </section>
    )

    return content
}