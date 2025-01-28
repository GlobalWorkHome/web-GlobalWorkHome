
import { useTranslations } from "next-intl"
import CompanyDashboard from "../components/CompanyDashboard"
import CompanyJobs from "../components/CompanyJobs"
import CompanyPayments from "../components/CompanyPayments"
import CompanyProfile from "../components/CompanyProfile"
import JobDetailsAndApplicants from "../components/JobDetailsAndApplicants"
import ApplicationReview from "../components/ApplicationReview"
import Analytics from "../components/Analytics"
import Messaging from "../components/Messaging"

export default function CompanyView() {
  const t = useTranslations("company")

  return (
   <>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{t("dashboard.title")}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <CompanyDashboard />
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <CompanyJobs />
        </div>

        <div className="col-span-1">
          <CompanyPayments />
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <CompanyProfile />
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <JobDetailsAndApplicants />
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <ApplicationReview />
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <Analytics />
        </div>

        <div className="col-span-1">
          <Messaging />
        </div>
      </div>
    </div>
    </>
  )
}

