"use client"
import { FaDesktop, FaCode, FaDatabase, FaMicrochip, FaPencilRuler } from 'react-icons/fa'
import { IoMdMegaphone } from "react-icons/io"

function OurCategories () {
  const categories = [
    {
      icon: <FaDesktop className="h-8 w-8" />,
      name: "Web Design",
    },
    {
      icon: <FaCode className="h-8 w-8" />,
      name: "Web Development",
    },
    {
      icon: <IoMdMegaphone className="h-8 w-8" />,
      name: "Marketing",
    },
    {
      icon: <FaDatabase className="h-8 w-8" />,
      name: "Data Entry",
    },
    {
      icon: <FaMicrochip className="h-8 w-8" />,
      name: "Software Engineer",
    },
    {
      icon: <FaPencilRuler className="h-8 w-8" />,
      name: "Graphic Designer",
    },
  ]

  return (
    <section className="container mx-auto py-12 px-4">
      <div className="flex flex-col justify-between items-center mb-12">        
        <h2 className="text-3xl font-bold text-center mb-12">Our Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 ">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg transition-all shadow-lg hover:bg-black hover:text-white"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {category.icon}
                <h3 className="font-medium">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 rounded-full bg-white text-black border border-gray-200 text-base hover:bg-black hover:text-white transition-colors"
          >
            View All →
          </a>
        </div>
      </div>
    </section>
  )
}

export default OurCategories