"use client"

import { useTranslations } from "next-intl"
import { useState, useEffect } from "react"
import InputPro from "../../ui/InputPro"
import { ButtonPro } from "../../ui/ButtonPro"
import  Textarea  from "../../ui/Textarea"
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/Card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/Table"
import { Badge } from "../../ui/Badge"
import Link from "next/link"

export default function CompanyJobs() {
  const t = useTranslations("company.jobs")
  const [jobTitle, setJobTitle] = useState("")
  const [jobDescription, setJobDescription] = useState("")
  const [requirements, setRequirements] = useState("")
  const [salary, setSalary] = useState("")
  const [jobPosted, setJobPosted] = useState(null)
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    // Fetch jobs data
    // This is where you'd typically make an API call
    setJobs([
      { id: 1, title: "Software Engineer", status: "active", applicants: 5 },
      { id: 2, title: "Product Manager", status: "closed", applicants: 10 },
      { id: 3, title: "UX Designer", status: "draft", applicants: 0 },
    ])
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!jobTitle || !jobDescription || !requirements || !salary) {
      alert(t("fillAllFields"))
      return
    }

    const jobData = { jobTitle, jobDescription, requirements, salary }
    console.log("Trabajo publicado:", jobData)
    setJobPosted({ title: jobTitle, description: jobDescription })
    setJobTitle("")
    setJobDescription("")
    setRequirements("")
    setSalary("")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{t("jobsList")}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t("jobTitle")}</TableHead>
                <TableHead>{t("status")}</TableHead>
                <TableHead>{t("applicants")}</TableHead>
                <TableHead>{t("actions")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell>{job.title}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        job.status === "active" ? "success" : job.status === "closed" ? "destructive" : "secondary"
                      }
                    >
                      {t(`status.${job.status}`)}
                    </Badge>
                  </TableCell>
                  <TableCell>{job.applicants}</TableCell>
                  <TableCell>
                    <Link href={`/company/jobs/${job.id}`}>
                      <ButtonPro variant="outline" size="sm">
                        {t("view")}
                      </ButtonPro>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("post")}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <InputPro
              type="text"
              placeholder={t("jobTitle")}
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
            <Textarea
              placeholder={t("jobDescription")}
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              rows={6}
            />
            <Textarea
              placeholder={t("requirements")}
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              rows={4}
            />
            <InputPro type="text" placeholder={t("salary")} value={salary} onChange={(e) => setSalary(e.target.value)} />
            <ButtonPro type="submit" className="w-full">
              {t("postButton")}
            </ButtonPro>
          </form>
        </CardContent>
      </Card>

      {jobPosted && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">{t("jobPosted")}</h2>
          <p>
            {t("jobTitle")}: {jobPosted.title}
          </p>
          <p>
            {t("jobDescription")}: {jobPosted.description}
          </p>
        </div>
      )}
    </div>
  )
}




// 'use client'

// import { useTranslations } from 'next-intl'
// import { useState } from 'react'
// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'
// import { Textarea } from '@/components/ui/textarea'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// export default function CompanyJobs() {
//   const t = useTranslations('company1.jobs')
//   const [jobTitle, setJobTitle] = useState('')
//   const [jobDescription, setJobDescription] = useState('')
//   const [requirements, setRequirements] = useState('')
//   const [salary, setSalary] = useState('')
//   const [jobPosted, setJobPosted] = useState(null)

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     // Validación simple para asegurarse de que los campos no estén vacíos
//     if (!jobTitle || !jobDescription || !requirements || !salary) {
//       alert(t('fillAllFields')) // Mensaje de alerta si algún campo está vacío
//       return
//     }

//     // Lógica para publicar el trabajo
//     const jobData = { jobTitle, jobDescription, requirements, salary }
    
//     console.log('Trabajo publicado:', jobData)

//     // Actualizar el estado para mostrar un mensaje de trabajo publicado
//     setJobPosted({ title: jobTitle, description: jobDescription })

//     // Limpiar los campos del formulario
//     setJobTitle('')
//     setJobDescription('')
//     setRequirements('')
//     setSalary('')
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
//       <Card>
//         <CardHeader>
//           <CardTitle>{t('post')}</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <Input
//               type="text"
//               placeholder={t('jobTitle')}
//               value={jobTitle}
//               onChange={(e) => setJobTitle(e.target.value)}
//             />
//             <Textarea
//               placeholder={t('jobDescription')}
//               value={jobDescription}
//               onChange={(e) => setJobDescription(e.target.value)}
//               rows={6}
//             />
//             <Textarea
//               placeholder={t('requirements')}
//               value={requirements}
//               onChange={(e) => setRequirements(e.target.value)}
//               rows={4}
//             />
//             <Input
//               type="text"
//               placeholder={t('salary')}
//               value={salary}
//               onChange={(e) => setSalary(e.target.value)}
//             />
//             <Button type="submit" className="w-full">
//               {t('postButton')}
//             </Button>
//           </form>
//         </CardContent>
//       </Card>

//       {jobPosted && (
//         <div className="mt-6">
//           <h2 className="text-xl font-semibold">{t('jobPosted')}</h2>
//           <p>{t('jobTitle')}: {jobPosted.title}</p>
//           <p>{t('jobDescription')}: {jobPosted.description}</p>
//         </div>
//       )}
//     </div>
//   )
// }
