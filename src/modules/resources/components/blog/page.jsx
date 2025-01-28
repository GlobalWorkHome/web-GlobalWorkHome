'use client'

import { useTranslations } from 'next-intl'

export default function Blog() {
  const t = useTranslations()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {t('resources.blog')}
      </h1>
      {/* Aquí irán los artículos del blog */}
    </div>
  )
}

