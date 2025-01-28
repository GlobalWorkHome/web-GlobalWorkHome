"use client"

import { useTranslations } from "next-intl"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/Card"
import { ButtonPro } from "../../ui/ButtonPro"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/Table"
import { Badge } from "../../ui/Badge"
import Link from "next/link"

export default function JobDetailsAndApplicants({ params }) {
  const t = useTranslations("company.jobDetails")
  const [jobDetails, setJobDetails] = useState(null)
  const [applicants, setApplicants] = useState([])

  useEffect(() => {
    // Fetch job details and applicants
    // This is where you'd typically make API calls
    setJobDetails({
      title: "Software Engineer",
      description: "We are looking for a talented software engineer...",
      requirements: "Bachelor's degree in Computer Science, 3+ years of experience...",
      salary: "$80,000 - $120,000",
    })
    setApplicants([
      { id: 1, name: "John Doe", email: "john@example.com", status: "pending" },
      { id: 2, name: "Jane Smith", email: "jane@example.com", status: "reviewing" },
      { id: 3, name: "Bob Johnson", email: "bob@example.com", status: "accepted" },
    ])
  }, [params])

  if (!jobDetails) {
    return <div>{t("loading")}</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{jobDetails.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">{t("description")}</h2>
              <p>{jobDetails.description}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">{t("requirements")}</h2>
              <p>{jobDetails.requirements}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">{t("salary")}</h2>
              <p>{jobDetails.salary}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <h2 className="text-2xl font-bold mb-4">{t("applicants")}</h2>
      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t("name")}</TableHead>
                <TableHead>{t("email")}</TableHead>
                <TableHead>{t("status")}</TableHead>
                <TableHead>{t("actions")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applicants.map((applicant) => (
                <TableRow key={applicant.id}>
                  <TableCell>{applicant.name}</TableCell>
                  <TableCell>{applicant.email}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        applicant.status === "pending"
                          ? "secondary"
                          : applicant.status === "reviewing"
                            ? "primary"
                            : "success"
                      }
                    >
                      {t(`status.${applicant.status}`)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Link href={`/company/applicants/${applicant.id}`}>
                      <ButtonPro variant="outline" size="sm">
                        {t("viewDetails")}
                      </ButtonPro>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}



// 'use client'

// import { useTranslations } from 'next-intl'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'

// export default function JobDetailsAndApplicants({ params }) {
//   const t = useTranslations('company1.jobDetails')

//   // Mock data for job details and applicants
//   const jobDetails = {
//     title: 'Software Engineer',
//     description: 'We are looking for a talented software engineer...',
//     requirements: "Bachelor's degree in Computer Science, 3+ years of experience...",
//     salary: '$80,000 - $120,000'
//   }

//   const applicants = [
//     { id: 1, name: 'John Doe', email: 'john@example.com', status: 'pending' },
//     { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'reviewing' },
//     { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'accepted' },
//   ]

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
//       <Card className="mb-8">
//         <CardHeader>
//           <CardTitle>{jobDetails.title}</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             <div>
//               <h2 className="text-xl font-semibold">{t('description')}</h2>
//               <p>{jobDetails.description}</p>
//             </div>
//             <div>
//               <h2 className="text-xl font-semibold">{t('requirements')}</h2>
//               <p>{jobDetails.requirements}</p>
//             </div>
//             <div>
//               <h2 className="text-xl font-semibold">{t('salary')}</h2>
//               <p>{jobDetails.salary}</p>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//       <h2 className="text-2xl font-bold mb-4">{t('applicants')}</h2>
//       <div className="space-y-4">
//         {applicants.map((applicant) => (
//           <Card key={applicant.id}>
//             <CardContent className="flex justify-between items-center p-4">
//               <div>
//                 <h3 className="font-semibold">{applicant.name}</h3>
//                 <p className="text-sm text-gray-500">{applicant.email}</p>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <span className={`px-2 py-1 rounded-full text-sm ${
//                   applicant.status === 'pending' ? 'bg-yellow-200 text-yellow-800' :
//                   applicant.status === 'reviewing' ? 'bg-blue-200 text-blue-800' :
//                   'bg-green-200 text-green-800'
//                 }`}>
//                   {t(`status.${applicant.status}`)}
//                 </span>
//                 <Button variant="outline">{t('viewDetails')}</Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }
