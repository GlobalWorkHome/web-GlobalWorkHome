'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'

export default function CreateJob() {
  const t = useTranslations('jobs1.create')

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{t('title')}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">{t('jobTitle')}</label>
            <Input className="mt-1" placeholder={t('jobTitlePlaceholder')} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">{t('company')}</label>
            <Input className="mt-1" placeholder={t('companyPlaceholder')} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">{t('location')}</label>
            <Select className="mt-1">
              {t('locations', { returnObjects: true }).map((location, index) => (
                <option key={index} value={location}>{location}</option>
              ))}
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">{t('description')}</label>
            <Textarea className="mt-1" rows={4} placeholder={t('descriptionPlaceholder')} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">{t('requirements')}</label>
            <Textarea className="mt-1" rows={4} placeholder={t('requirementsPlaceholder')} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">{t('responsibilities')}</label>
            <Textarea className="mt-1" rows={4} placeholder={t('responsibilitiesPlaceholder')} />
          </div>
          <Button className="w-full">{t('submitButtonText')}</Button>
        </CardContent>
      </Card>
    </div>
  )
}

