"use client"

import { useTranslations } from "next-intl"
import { useState } from "react"
import InputPro from "../../ui/InputPro"
import { ButtonPro } from "../../ui/ButtonPro"
import Textarea  from "../../ui/Textarea"
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/Card"

export default function CompanyProfile() {
  const t = useTranslations("company.profile")
  const [companyName, setCompanyName] = useState("")
  const [description, setDescription] = useState("")
  const [website, setWebsite] = useState("")
  const [industry, setIndustry] = useState("")
  const [profileStatus, setProfileStatus] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      console.log({
        companyName,
        description,
        website,
        industry,
      })

      setProfileStatus("success")
    } catch (error) {
      setProfileStatus("error")
      console.error("Profile update failed:", error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
      <Card>
        <CardHeader>
          <CardTitle>{t("updateProfile")}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <InputPro
              type="text"
              placeholder={t("companyName")}
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              label={t("companyName")}
              name="companyName"
            />
            <Textarea
              placeholder={t("description")}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={6}
            />
            <InputPro
              type="url"
              placeholder={t("website")}
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              label={t("website")}
              name="website"
            />
            <InputPro
              type="text"
              placeholder={t("industry")}
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              label={t("industry")}
              name="industry"
            />
            <ButtonPro type="submit" className="w-full">
              {t("updateButton")}
            </ButtonPro>
          </form>
          {profileStatus && (
            <div className={`mt-4 text-lg ${profileStatus === "success" ? "text-green-500" : "text-red-500"}`}>
              {profileStatus === "success" ? t("updateSuccess") : t("updateError")}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}



