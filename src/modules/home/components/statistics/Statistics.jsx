import React from 'react';
import { useTranslations } from 'next-intl';

const Statistics = () => {
  const t = useTranslations('Statistics');

  const stats = [
    { key: 'activeJobs', number: t('stats.activeJobs.number'), label: t('stats.activeJobs.label') },
    { key: 'companies', number: t('stats.companies.number'), label: t('stats.companies.label') },
    { key: 'jobSeekers', number: t('stats.jobSeekers.number'), label: t('stats.jobSeekers.label') },
    { key: 'jobsFilled', number: t('stats.jobsFilled.number'), label: t('stats.jobsFilled.label') },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.key}
              className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;




// import React from 'react';

// const Statistics = () => {
//   const stats = [
//     { number: "15k+", label: "Active Jobs" },
//     { number: "10k+", label: "Companies" },
//     { number: "25k+", label: "Job Seekers" },
//     { number: "8k+", label: "Jobs Filled" },
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">Our Impact in Numbers</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
//             >
//               <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
//               <div className="text-gray-600">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Statistics;

