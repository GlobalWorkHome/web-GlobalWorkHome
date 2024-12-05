import React from 'react';

export function InterviewCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-orange-500 rounded-lg text-white">
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  )
}



// import React from 'react';

// export function InterviewCard({ icon: Icon, title, description }) {
//   return (
//     <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm">
//       <div className="p-2 bg-gray-50 rounded-full">
//         <Icon className="w-6 h-6 text-gray-500" />
//       </div>
//       <div>
//         <h3 className="font-medium text-gray-900">{title}</h3>
//         <p className="text-sm text-gray-500">{description}</p>
//       </div>
//     </div>
//   )
// }