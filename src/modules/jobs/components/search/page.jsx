'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Pagination } from '@/components/ui/pagination'

const ITEMS_PER_PAGE = 10

export default function JobSearch() {
  const t = useTranslations('jobs1.search')
  const [keyword, setKeyword] = useState('')
  const [location, setLocation] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  // Simulated data - in a real app, this would come from an API
  const jobs = [
    { id: 1, title: 'Software Engineer', company: 'Tech Co', location: 'San Francisco, CA', description: 'Exciting opportunity for a skilled software engineer...' },
    { id: 2, title: 'Product Manager', company: 'Startup Inc', location: 'New York, NY', description: 'Looking for an experienced product manager to lead our team...' },
    { id: 3, title: 'Data Analyst', company: 'Big Data Ltd', location: 'Chicago, IL', description: 'Join our data team to analyze and interpret complex data sets...' },
    // ... more jobs
  ]

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(keyword.toLowerCase()) &&
    (location === '' || job.location.toLowerCase().includes(location.toLowerCase()))
  )

  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE)
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const handleSearch = (e) => {
    e.preventDefault()
    setCurrentPage(1)
    // In a real app, this would trigger an API call
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{t('title')}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSearch} className="flex space-x-4">
            <Input 
              className="flex-grow" 
              placeholder={t('keywordPlaceholder')}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <Select value={location} onValueChange={setLocation}>
              <option value="">{t('locationPlaceholder')}</option>
              <option value="San Francisco, CA">San Francisco, CA</option>
              <option value="New York, NY">New York, NY</option>
              <option value="Chicago, IL">Chicago, IL</option>
            </Select>
            <Button type="submit">{t('searchButtonText')}</Button>
          </form>

          <div>
            <h2 className="text-xl font-semibold mb-4">{t('resultsTitle')}</h2>
            {paginatedJobs.map((job) => (
              <Card key={job.id} className="mb-4">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <p className="text-gray-500">{job.company} • {job.location}</p>
                  <p className="mt-2">{job.description}</p>
                  <Button className="mt-4" variant="outline">{t('viewJobButtonText')}</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </CardContent>
      </Card>
    </div>
  )
}

