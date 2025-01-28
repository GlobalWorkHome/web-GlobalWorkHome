import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function NavMenu() {
  const t = useTranslations('Navbar')

  return (
    <nav className="hidden md:flex space-x-6">
      <Link 
        href="/" 
        className="text-sm font-medium text-gray-700 hover:text-gray-900"
      >
        {t('home')}
      </Link>
      <Link 
        href="/how-we-work" 
        className="text-sm font-medium text-gray-700 hover:text-gray-900"
      >
        {t('howWeWork')}
      </Link>
    </nav>
  )
}

