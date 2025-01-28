import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  const t = useTranslations()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">
        {t('error.notFound')}
      </p>
      <Link href="/">
        <Button>
          {t('common.backToHome')}
        </Button>
      </Link>
    </div>
  )
}

