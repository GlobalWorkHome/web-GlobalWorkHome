import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa' // Importamos los iconos de react-icons
import Link from "next/link"
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We connect talented professionals with the best companies worldwide for remote and local opportunities.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/find-jobs" className="hover:text-white transition-colors">
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link href="/post-job" className="hover:text-white transition-colors">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-white transition-colors">
                  Upload Resume
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white transition-colors">
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <FaLinkedin className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <FaInstagram className="w-6 h-6" />
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/images/logo-white-white.svg"
                  alt="logo"
                  width={150}
                  height={150}
                  className="object-cover mt-10"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Global Work Home. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer