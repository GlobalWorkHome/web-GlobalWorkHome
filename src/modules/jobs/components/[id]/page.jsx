'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function JobDetails({ params }) {
  const t = useTranslations('jobs1.details')

  // Simulated data - in a real app, this would come from an API based on the job ID
  const job = {
    id: params.id,
    title: 'Senior Software Engineer',
    companyName: 'Tech Innovators Inc',
    location: 'San Francisco, CA',
    description: 'We are seeking a talented and motivated Senior Software Engineer to join our dynamic team...',
    requirements: [
      'Bachelors degree in Computer Science or related field',
      '5+ years of experience in software development',
      'Proficiency in JavaScript, React, and Node.js',
      'Experience with cloud platforms (AWS, Azure, or GCP)'
    ],
    responsibilities: [
      'Design and implement new features for our core product',
      'Collaborate with cross-functional teams to define and implement innovative solutions',
      'Write clean, maintainable, and efficient code',
      'Participate in code reviews and mentor junior developers'
    ],
    aboutCompany: 'Tech Innovators Inc is a leading software company dedicated to creating cutting-edge solutions...'
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{job.title}</CardTitle>
          <p className="text-gray-500">{job.companyName} • {job.location}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">{t('description')}</h2>
            <p>{job.description}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">{t('requirements')}</h2>
            <ul className="list-disc pl-5">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">{t('responsibilities')}</h2>
            <ul className="list-disc pl-5">
              {job.responsibilities.map((res, index) => (
                <li key={index}>{res}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">{t('aboutCompany')}</h2>
            <p>{job.aboutCompany}</p>
          </div>
          <Button className="w-full">{t('applyButtonText')}</Button>
        </CardContent>
      </Card>
    </div>
  )
}

