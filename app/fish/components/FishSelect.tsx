import Link from "next/link"


type Props = {
    promise: Promise<Fish[]>
}

export default async function FishSelect({ promise }: Props) {
    const posts = await promise

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
                const randomFish = posts[Math.floor(Math.random() * 1100)];
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