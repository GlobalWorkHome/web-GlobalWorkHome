import React from 'react'
import { useTranslations } from 'next-intl'

export function SearchBar() {
  const t = useTranslations('Hero')

  return (
    <div className="flex max-w-md gap-2">
      <input 
        type="text" 
        placeholder={t('searchPlaceholder')}
        className="flex-grow px-4 py-2 text-gray-700 bg-white/95 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
      />
      <button 
        className="px-8 py-2 text-white bg-yellow-600 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
      >
        {t('searchButton')}
      </button>
    </div>
  )
}



// "use client"
// import React from 'react';

// export function SearchBar() {
//   return (
//     <div className="flex max-w-md gap-2">
//       <input 
//         type="text" 
//         placeholder="Job Title, keywords..." 
//         className="flex-grow px-4 py-2 text-gray-700 bg-white/95 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
//       />
//       <button 
//         className="px-8 py-2 text-white bg-yellow-600 rounded-md hover:bg-yellow-600/85 focus:outline-none focus:ring-2 focus:ring-[#FA4D04] focus:ring-offset-2"
//       >
//         Search Job
//       </button>
//     </div>
//   )
// }