"use client";
import React from "react";
import { useTranslations } from 'next-intl';
import { FaBriefcase, FaPaintBrush, FaUserTie, FaCode, FaHeadset, FaDesktop, FaServer, FaChartBar } from "react-icons/fa";

function JobCard({ type, location, title, icon, department, salary, buttonText, index }) {
  const brandColors = [
    "bg-[#1DB954]", "bg-[#E60023]", "bg-[#4285F4]", "bg-[#000000]",
    "bg-[#25D366]", "bg-[#FF1493]", "bg-[#1DB954]", "bg-[#E60023]",
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">{type}</span>
        <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">{location}</span>
      </div>
      
      <div className="flex items-center gap-3 mb-3">
        <div className={`rounded-full ${brandColors[index]} w-10 h-10 flex items-center justify-center text-white`}>
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600 text-sm">{department}</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-900 font-medium">{salary}</p>
      </div>

      <button className="w-full py-2.5 px-4 rounded-lg border border-gray-200 bg-white text-black hover:bg-black hover:text-white transition-all duration-200">
        {buttonText}
      </button>
    </div>
  );
}

function OurJobs() {
  const t = useTranslations('OurJobs');

  const jobsData = [
    {
      id: 1,
      type: 'Full-time',
      location: 'Glendale, CA',
      title: 'Product Manager',
      icon: <FaBriefcase className="w-5 h-5" />, 
      department: 'Marketing',
      salary: '$2,000 - $5,000 / Monthly',
      buttonText: t('applyNow'),
    },
    {
      id: 2,
      type: 'Part-time',
      location: 'Glenwood, CA',
      title: 'Product Designer',
      icon: <FaPaintBrush className="w-5 h-5" />,
      department: 'Design',
      salary: '$2,000 - $5,000 / Monthly',
      buttonText: t('applyNow'),
    },
    {
      id: 3,
      type: 'Part-time',
      location: 'Tripic, CA',
      title: 'Recruitment Coordinator',
      icon: <FaUserTie className="w-5 h-5" />,
      department: 'Customer Service',
      salary: '$2,000 - $5,000 / Monthly',
      buttonText: t('applyNow'),
    },
    {
      id: 4,
      type: 'Part-time',
      location: 'Greenwood, CA',
      title: 'Software Engineer',
      icon: <FaCode className="w-5 h-5" />,
      department: 'Development',
      salary: '$2,000 - $5,000 / Monthly',
      buttonText: t('applyNow'),
    },
    {
      id: 5,
      type: 'Part-time',
      location: 'Rosslynville, CA',
      title: 'Customer Support',
      icon: <FaHeadset className="w-5 h-5" />,
      department: 'Support',
      salary: '$2,000 - $5,000 / Monthly',
      buttonText: t('applyNow'),
    },
    {
      id: 6,
      type: 'Part-time',
      location: 'Grandview, CA',
      title: 'UI/UX Designer',
      icon: <FaDesktop className="w-5 h-5" />,
      department: 'Design',
      salary: '$2,000 - $5,000 / Monthly',
      buttonText: t('applyNow'),
    },
    {
      id: 7,
      type: 'Full-time',
      location: 'Newport, CA',
      title: 'Data Analyst',
      icon: <FaChartBar className="w-5 h-5" />,
      department: 'Analytics',
      salary: '$3,000 - $6,000 / Monthly',
      buttonText: t('applyNow'),
    },
    {
      id: 8,
      type: 'Remote',
      location: 'Remote',
      title: 'DevOps Engineer',
      icon: <FaServer className="w-5 h-5" />,
      department: 'IT Infrastructure',
      salary: '$4,000 - $7,000 / Monthly',
      buttonText: t('applyNow'),
    },
  ];

  return (
    <section className="container mx-auto py-16 px-4">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold">{t('title')}</h2>
        <a href="#" className="inline-flex items-center px-4 py-2 rounded-full bg-white text-black border border-gray-200 text-base hover:bg-black hover:text-white transition-colors">
          {t('viewAll')}
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {jobsData.map((job, index) => (
          <JobCard key={job.id} {...job} index={index} />
        ))}
      </div>
    </section>
  );
}

export default OurJobs;




// "use client";
// import React from "react";
// import { FaBriefcase, FaPaintBrush, FaUserTie, FaCode, FaHeadset, FaDesktop, FaServer, FaChartBar } from "react-icons/fa";

// function JobCard({ type, location, title, icon, department, salary, buttonText, index }) {
//   // Array of brand colors for icons
//   const brandColors = [
//     "bg-[#1DB954]", // Spotify green
//     "bg-[#E60023]", // Pinterest red
//     "bg-[#4285F4]", // Google blue
//     "bg-[#000000]", // Apple black
//     "bg-[#25D366]", // WhatsApp green
//     "bg-[#FF1493]", // Deep pink
//     "bg-[#1DB954]", // Spotify green
//     "bg-[#E60023]",
//   ];

//   return (
//     <div className="bg-white rounded-xl p-6 shadow-lg">
//       <div className="flex flex-wrap gap-2 mb-4">
//         <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">{type}</span>
//         <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">{location}</span>
//       </div>
      
//       <div className="flex items-center gap-3 mb-3">
//         <div className={`rounded-full ${brandColors[index]} w-10 h-10 flex items-center justify-center text-white`}>
//           {icon}
//         </div>
//         <div>
//           <h3 className="text-xl font-semibold">{title}</h3>
//           <p className="text-gray-600 text-sm">{department}</p>
//         </div>
//       </div>

//       <div className="mb-4">
//         <p className="text-gray-900 font-medium">{salary}</p>
//       </div>

//       <button className="w-full py-2.5 px-4 rounded-lg border border-gray-200 bg-white text-black hover:bg-black hover:text-white transition-all duration-200">
//         {buttonText}
//       </button>
//     </div>
//   );
// }

// function OurJobs() {
//   const jobsData = [
//     {
//       id: 1,
//       type: 'Full-time',
//       location: 'Glendale, CA',
//       title: 'Product Manager',
//       icon: <FaBriefcase className="w-5 h-5" />, 
//       department: 'Marketing',
//       salary: '$2,000 - $5,000 / Monthly',
//       buttonText: 'Apply Now',
//     },
//     {
//       id: 2,
//       type: 'Part-time',
//       location: 'Glenwood, CA',
//       title: 'Product Designer',
//       icon: <FaPaintBrush className="w-5 h-5" />,
//       department: 'Design',
//       salary: '$2,000 - $5,000 / Monthly',
//       buttonText: 'Apply Now',
//     },
//     {
//       id: 3,
//       type: 'Part-time',
//       location: 'Tripic, CA',
//       title: 'Recruitment Coordinator',
//       icon: <FaUserTie className="w-5 h-5" />,
//       department: 'Customer Service',
//       salary: '$2,000 - $5,000 / Monthly',
//       buttonText: 'Apply Now',
//     },
//     {
//       id: 4,
//       type: 'Part-time',
//       location: 'Greenwood, CA',
//       title: 'Software Engineer',
//       icon: <FaCode className="w-5 h-5" />,
//       department: 'Development',
//       salary: '$2,000 - $5,000 / Monthly',
//       buttonText: 'Apply Now',
//     },
//     {
//       id: 5,
//       type: 'Part-time',
//       location: 'Rosslynville, CA',
//       title: 'Customer Support',
//       icon: <FaHeadset className="w-5 h-5" />,
//       department: 'Support',
//       salary: '$2,000 - $5,000 / Monthly',
//       buttonText: 'Apply Now',
//     },
//     {
//       id: 6,
//       type: 'Part-time',
//       location: 'Grandview, CA',
//       title: 'UI/UX Designer',
//       icon: <FaDesktop className="w-5 h-5" />,
//       department: 'Design',
//       salary: '$2,000 - $5,000 / Monthly',
//       buttonText: 'Apply Now',
//     },
//     {
//       id: 7,
//       type: 'Full-time',
//       location: 'Newport, CA',
//       title: 'Data Analyst',
//       icon: <FaChartBar className="w-5 h-5" />,
//       department: 'Analytics',
//       salary: '$3,000 - $6,000 / Monthly',
//       buttonText: 'Apply Now',
//     },
//     {
//       id: 8,
//       type: 'Remote',
//       location: 'Remote',
//       title: 'DevOps Engineer',
//       icon: <FaServer className="w-5 h-5" />,
//       department: 'IT Infrastructure',
//       salary: '$4,000 - $7,000 / Monthly',
//       buttonText: 'Apply Now',
//     },
//   ];


//   return (
//     <section className="container mx-auto py-16 px-4">
//       <div className="flex justify-between items-center mb-12">
//         <h2 className="text-3xl font-bold">Our Features Jobs</h2>
//         <a href="#" className="inline-flex items-center px-4 py-2 rounded-full bg-white text-black border border-gray-200 text-base hover:bg-black hover:text-white transition-colors">
//           View All →
//         </a>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {jobsData.map((job, index) => (
//           <JobCard key={job.id} {...job} index={index} />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default OurJobs;
