import React from "react"

const Textarea = ({ label = "", placeholder = "", value = "", onChange = () => {}, name = "", rows = 4 }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <label htmlFor={name} className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
        {label}
      </label>
      <div className="relative">
        <textarea
          id={name}
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#F49D37] focus:border-[#F49D37] transition-all shadow-sm resize-none hover:border-[#F49D37]/50"
        ></textarea>
        <div className="absolute bottom-2 right-3 text-xs text-gray-500 dark:text-gray-400">{value.length} / 500</div>
      </div>
    </div>
  )
}

export default Textarea

