import Link from "next/link"

export default function Home() {
  return (
    <div className="button-center">
      <button className='button-box'>
        <Link href="/fish">Generate Fish</Link>
      </button>
    </div>
  )
}
