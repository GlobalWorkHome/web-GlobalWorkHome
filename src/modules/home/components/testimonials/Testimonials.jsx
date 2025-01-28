import React from 'react';
import { useTranslations } from 'next-intl';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const t = useTranslations('Testimonials');

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Software Developer",
      comment:
        "Found my dream job within weeks. The platform is intuitive and the job matching is spot-on!",
      rating: 5,
    },
    {
      name: "Sarah Williams",
      role: "HR Manager",
      comment:
        "As a recruiter, this platform has made hiring top talent incredibly efficient and straightforward.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Data Analyst",
      comment:
        "The variety of job listings and the easy application process made my job search much less stressful.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-gray-500 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;




// import React from 'react';
// import { FaStar } from 'react-icons/fa';

// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: "Alex Johnson",
//       role: "Software Developer",
//       comment:
//         "Found my dream job within weeks. The platform is intuitive and the job matching is spot-on!",
//       rating: 5,
//     },
//     {
//       name: "Sarah Williams",
//       role: "HR Manager",
//       comment:
//         "As a recruiter, this platform has made hiring top talent incredibly efficient and straightforward.",
//       rating: 5,
//     },
//     {
//       name: "Michael Chen",
//       role: "Data Analyst",
//       comment:
//         "The variety of job listings and the easy application process made my job search much less stressful.",
//       rating: 5,
//     },
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
//             >
//               <div className="flex mb-4">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <FaStar key={i} className="w-5 h-5 text-yellow-400" />
//                 ))}
//               </div>
//               <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
//               <div>
//                 <div className="font-semibold">{testimonial.name}</div>
//                 <div className="text-gray-500 text-sm">{testimonial.role}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
