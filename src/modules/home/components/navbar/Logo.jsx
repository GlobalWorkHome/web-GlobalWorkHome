import Image from 'next/image'
import Link from 'next/link'
export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
    <Image
    src="/images/logo.svg"
    alt='logo'
    width={150}
    height={150}
    className='object-cover'
    />

    </Link>
  )
}