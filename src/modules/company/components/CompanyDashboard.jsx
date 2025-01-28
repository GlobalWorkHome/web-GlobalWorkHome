"use client"

import { useTranslations } from "next-intl"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/Card"
import { ButtonPro } from "../../ui/ButtonPro"
import { MdWork, MdPeople, MdVisibility, MdAdd } from "react-icons/md"
import Link from "next/link"

export default function CompanyDashboard() {
  const t = useTranslations("company.dashboard")
  const [stats, setStats] = useState({
    totalJobs: 0,
    activeApplications: 0,
    totalViews: 0,
  })
  const [recentActivity, setRecentActivity] = useState([])

  useEffect(() => {
    // Fetch dashboard data
    // This is where you'd typically make an API call
    setStats({
      totalJobs: 10,
      activeApplications: 25,
      totalViews: 1000,
    })
    setRecentActivity([
      { id: 1, type: "application", job: "Software Engineer", applicant: "John Doe", time: "2 hours ago" },
      { id: 2, type: "view", job: "Product Manager", count: 50, time: "1 day ago" },
      { id: 3, type: "hire", job: "UX Designer", applicant: "Jane Smith", time: "3 days ago" },
    ])
  }, [])

  return (
    <>
    <div className="container mx-auto px-4 py-8">
     

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t("totalJobs")}</CardTitle>
            <MdWork className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalJobs}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t("activeApplications")}</CardTitle>
            <MdPeople className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeApplications}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t("totalViews")}</CardTitle>
            <MdVisibility className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalViews}</div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{t("quickActions")}</h2>
        <Link href="/company/jobs/new">
          <ButtonPro>
            <MdAdd className="mr-2 h-4 w-4" /> {t("postJob")}
          </ButtonPro>
        </Link>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{t("recentActivity")}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {recentActivity.map((activity) => (
              <li key={activity.id} className="flex justify-between items-center">
                <div>
                  {activity.type === "application" && (
                    <p>{t("newApplication", { job: activity.job, applicant: activity.applicant })}</p>
                  )}
                  {activity.type === "view" && <p>{t("jobViews", { job: activity.job, count: activity.count })}</p>}
                  {activity.type === "hire" && (
                    <p>{t("newHire", { job: activity.job, applicant: activity.applicant })}</p>
                  )}
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
    </>
  )
}

