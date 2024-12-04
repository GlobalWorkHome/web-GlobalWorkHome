import React from 'react';
import { FaFileAlt, FaPhoneAlt, FaVideo } from 'react-icons/fa';
import Image from "next/image"
import { SearchBar } from "./SearchBar"
import { InterviewCard } from "./InterviewCard"

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#1a3b5d]">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
            <div className="space-y-4 max-w-md ml-auto">
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
            <div className="absolute -right-16 bottom-0 hidden lg:block">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=192&width=192"
                  alt="Handshake"
                  width={192}
                  height={192}
                  className="object-cover"
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
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  )
}