'use client'

import { useTranslations } from 'next-intl'

export default function UserResume() {
  const t = useTranslations()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {t('profile.resume')}
      </h1>
      {/* Aquí irá la gestión del CV del usuario */}
    </div>
  )
}

