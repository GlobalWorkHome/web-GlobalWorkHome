import React from 'react';

export function InterviewCard({ icon: Icon, title, description }) {
  return (
    <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm">
      <div className="p-2 bg-gray-50 rounded-full">
        <Icon className="w-6 h-6 text-gray-500" />
      </div>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  )
}