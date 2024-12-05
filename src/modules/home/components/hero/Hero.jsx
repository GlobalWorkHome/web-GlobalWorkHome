import React from 'react'
import { FaFileAlt, FaPhoneAlt, FaVideo } from 'react-icons/fa'
import Image from "next/image"
import { SearchBar } from "./SearchBar"
import { InterviewCard } from "./InterviewCard"

export default function Hero () {
  return (
    <div className="relative overflow-hidden bg-[url('/images/hombre.webp')] min-h-[700px] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-black/80 before:to-black/40">

      <div className="flex items-center min-h-[700px] mx-auto px-4 relative container z-10">

        <div className="grid lg:grid-cols-2 gap-40 items-center min-w-96">

          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Find Remote jobs.
                <br />
                All in one place
              </h1>
              <p className="text-lg text-gray-200 max-w-md">
                Scaling your business just got easier.
                All-powered platform for on-demand remote IT solutions.
                Discover the best talent for your business without the hassle.
              </p>
            </div>
            <SearchBar />
          </div>


          {/* Right Column */}
          <div className="relative">
            <div className="space-y-4 max-w-md">
              <InterviewCard
                icon={FaFileAlt}
                title="Resume"
                description="Lorem ipsum dolor sit amet consectetur adipiscing elit"
              />
              <InterviewCard
                icon={FaPhoneAlt}
                title="Telephone Interview"
                description="Lorem ipsum dolor sit amet consectetur adipiscing elit"
              />
              <InterviewCard
                icon={FaVideo}
                title="Video call Interview"
                description="Lorem ipsum dolor sit amet consectetur adipiscing elit"
              />
            </div>
            <div className="absolute -right-96 -bottom-14 hidden lg:block -z-10">
              <div className="relative w-[450px] h-[450px] rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/images/Ellipse.svg"
                  alt="Handshake"
                  className="object-cover w-full h-full"
                  height={300}
                  width={300}
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Wave Shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </div>
  )
}

