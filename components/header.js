import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="mt-8 mb-20 text-2xl font-bold leading-tight tracking-tight md:text-2xl md:tracking-tighter">
      <Link href="/">
        <a className="hover:underline">WEBSITEMACHINE</a>
      </Link>
      .
    </h2>
  )
}
