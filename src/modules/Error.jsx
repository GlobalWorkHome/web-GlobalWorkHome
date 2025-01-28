'use client'

import { useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}) {
  const t = useTranslations()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">500</h1>
      <p className="text-xl text-gray-600 mb-8">
        {t('error.serverError')}
      </p>
      <Button onClick={() => reset()}>
        {t('common.tryAgain')}
      </Button>
    </div>
  )
}

