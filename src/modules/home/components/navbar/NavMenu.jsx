import Link from 'next/link'

export default function NavMenu() {
  return (
    <nav className="hidden md:flex space-x-6">
      <Link 
        href="/" 
        className="text-sm font-medium text-gray-700 hover:text-gray-900"
      >
        Home
      </Link>
      <Link 
        href="/how-we-work" 
        className="text-sm font-medium text-gray-700 hover:text-gray-900"
      >
        How we work
      </Link>
    </nav>
  )
}