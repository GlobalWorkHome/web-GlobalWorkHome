"use client"

import { useTranslations } from "next-intl"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/Card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function Analytics() {
  const t = useTranslations("company.analytics")
  const [jobPerformance, setJobPerformance] = useState([])
  const [applicantDemographics, setApplicantDemographics] = useState([])

  useEffect(() => {
    // Fetch analytics data
    // This is where you'd typically make API calls
    setJobPerformance([
      { name: "Software Engineer", views: 1000, applications: 50, hires: 2 },
      { name: "Product Manager", views: 800, applications: 30, hires: 1 },
      { name: "UX Designer", views: 1200, applications: 40, hires: 1 },
      { name: "Data Scientist", views: 600, applications: 20, hires: 0 },
    ])
    setApplicantDemographics([
      { name: "18-24", value: 20 },
      { name: "25-34", value: 40 },
      { name: "35-44", value: 25 },
      { name: "45+", value: 15 },
    ])
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{t("jobPerformance")}</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={jobPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="views" fill="#8884d8" name={t("views")} />
              <Bar dataKey="applications" fill="#82ca9d" name={t("applications")} />
              <Bar dataKey="hires" fill="#ffc658" name={t("hires")} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>{t("applicantDemographics")}</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={applicantDemographics}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" name={t("percentage")} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

