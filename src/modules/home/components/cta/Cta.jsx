import React from 'react';
import { useTranslations } from 'next-intl';

const Cta = () => {
  const t = useTranslations('CTA');

  return (
    <section className="py-20 bg-gray-100 text-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{t('title')}</h2>
        <p className="mb-8 max-w-2xl mx-auto">{t('description')}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 rounded-md font-semibold bg-yellow-600 text-white hover:bg-yellow-500 transition-all duration-300 text-lg">
            {t('postJob')}
          </button>
          <button className="px-6 py-3 rounded-md font-semibold bg-gray-800 text-white border-white hover:bg-gray-700 transition-all duration-300 text-lg">
            {t('uploadResume')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cta;



// import React from "react";

// const Cta = () => {
//   return (
//     <section className="py-20 bg-gray-100 text-black"> {/* Cambié el color de fondo a un azul para destacarse */}
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold mb-4">Ready to Find Your Next Opportunity?</h2>
//         <p className="mb-8 max-w-2xl mx-auto text-black"> {/* El texto es blanco pero con un poco de opacidad */}
//           Join thousands of job seekers who have found their dream jobs through our platform
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           {/* Botón "Post a Job" */}
//           <button
//             className="px-6 py-3 rounded-md font-semibold bg-yellow-600 text-white hover:bg-yellow-600/80 transition-all duration-300 text-lg"
//           >
//             Post a Job
//           </button>

//           {/* Botón "Upload Your Resume" */}
//           <button
//             className="px-6 py-3 rounded-md font-semibold bg-gray-800 text-white border-white hover:bg-gray-700 transition-all duration-300 text-lg"
//           >
//             Upload Your Resume
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Cta;
