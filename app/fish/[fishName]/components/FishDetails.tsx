type Props = {
    promise: Promise<Fish[]>
}

export default async function FishDetails({ promise }: Props) {
    const posts = await promise

    const content = posts.map(post => {
        return (
            <article key={post.id}>
                <h2>{post.name}</h2>
                <img src={post.img_src_set['2x']}/>
                <br />
            </article>
        )
    })

    return content
}