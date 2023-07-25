import getFish from "@/lib/getFish"
import { Suspense } from "react"
import type { Metadata } from 'next'
import FishDetails from "./components/FishDetails"

type Params = {
    params: {
        fishName: string
    }
}

export async function generateMetadata({ params: { fishName } }: Params): Promise<Metadata> {
    const fishData: Promise<Fish> = getFish(fishName)
    const fish: Fish = await fishData

    return {
        title: fish.name,
        description: `This is the page of ${fish.name}`
    }

}

export default async function FishPage({ params: { fishName } }: Params) {
    const fishData: Promise<Fish> = getFish(fishName)
    const fishDetailsData: Promise<Fish[]> = getFish(fishName)


    return (
        <Suspense fallback={<h2>Loading...</h2>}>
            <FishDetails promise={fishDetailsData} />
        </Suspense>
    );

}