import Link from "next/link"

type Props = {
    promise: Promise<Fish[]>
}

export default async function FishDetails({ promise }: Props) {
    const posts = await promise

    const content = posts.map(post => {
        return (
            <article className='details-page-layout' key={post.id}>
                <Link className='button-box' href="/fish">Go Back</Link>
                <h2 className="name-text">{post.name}</h2>
                <img className='image-full' src={post.img_src_set['2x']} alt={post.name} />
                <a className='button-box' href={post.url} target=".">Link to wiki page</a>
                <br />
            </article>
        )
    })

    return content
}