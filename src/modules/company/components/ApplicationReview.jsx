"use client"

import { useTranslations } from "next-intl"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/Card"
import { ButtonPro } from "../../ui/ButtonPro"
import Textarea from "../../ui/Textarea"
import { Select } from "../../ui/Select"

export default function ApplicationReview ({ params }) {
  const t = useTranslations("company.applicationReview")
  const [application, setApplication] = useState(null)
  const [notes, setNotes] = useState("")
  const [status, setStatus] = useState("")

  useEffect(() => {
    // Fetch application details
    // This is where you'd typically make an API call
    setApplication({
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      resume: "https://example.com/resume.pdf",
      coverLetter: "I am excited to apply for this position...",
      status: "pending",
    })
  }, [params])

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus)
    // Here you would typically update the status via an API call
    console.log(`Status updated to ${newStatus}`)
  }

  const handleNotesSave = () => {
    // Here you would typically save the notes via an API call
    console.log("Notes saved:", notes)
  }

  if (!application) {
    return <div>{t("loading")}</div>
  }


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{application.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">{t("email")}</h2>
              <p>{application.email}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">{t("resume")}</h2>
              <a href={application.resume} target="_blank" rel="noopener noreferrer">
                {t("viewResume")}
              </a>
            </div>
            <div>
              <h2 className="text-xl font-semibold">{t("coverLetter")}</h2>
              <p>{application.coverLetter}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">{t("status.label")}</h2>
              <Select value={status} onChange={handleStatusChange}>
                <option value="" disabled>
                  {t("status.placeholder")}
                </option>
                <option value="pending">{t("status.pending")}</option>
                <option value="reviewing">{t("status.reviewing")}</option>
                <option value="accepted">{t("status.accepted")}</option>
                <option value="rejected">{t("status.rejected")}</option>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>{t("notes")}</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder={t("notesPlaceholder")}
            rows={6}
          />
          <ButtonPro onClick={handleNotesSave} className="mt-4">
            {t("saveNotes")}
          </ButtonPro>
        </CardContent>
      </Card>
    </div>
  )
}

