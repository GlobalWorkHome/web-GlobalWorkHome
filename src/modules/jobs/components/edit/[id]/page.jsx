'use client'

import { useTranslations } from 'next-intl'

export default function EditJob({ params }) {
  const t = useTranslations()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {t('jobs1.edit')} {params.id}
      </h1>
      {/* Aquí irá el formulario para editar un empleo existente */}
    </div>
  )
}

