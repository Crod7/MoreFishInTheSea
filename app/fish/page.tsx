import type { Metadata } from 'next'
import getAllFish from '@/lib/getAllFishes'
import Link from "next/link"
import { Suspense } from "react"

import FishSelect from './components/FishSelect'

export const metadata: Metadata = {
    title: 'Fishes',
}

export default async function FishPage() {
    const fishData: Promise<Fish[]> = getAllFish()

    return (
        <Suspense fallback={<h2>Loading...</h2>}>
            <FishSelect promise={fishData} />
        </Suspense>

        
    );
}