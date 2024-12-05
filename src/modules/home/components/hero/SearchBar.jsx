"use client"
import React from 'react';

export function SearchBar() {
  return (
    <div className="flex max-w-md gap-2">
      <input 
        type="text" 
        placeholder="Job Title, keywords..." 
        className="flex-grow px-4 py-2 text-gray-700 bg-white/95 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA4D04]"
      />
      <button 
        className="px-8 py-2 text-white bg-[#FA4D04] rounded-md hover:bg-[#FA4D04]/90 focus:outline-none focus:ring-2 focus:ring-[#FA4D04] focus:ring-offset-2"
      >
        Search Job
      </button>
    </div>
  )
}