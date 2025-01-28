import React from "react"

const InputPro = ({ label = "", placeholder = "", type = "text", value = "", onChange = () => {}, name = "" }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <label htmlFor={name} className="block text-sm font-medium text-black dark:text-gray-200 mb-1">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#F49D37] focus:border-[#F49D37] transition-all shadow-sm hover:border-[#F49D37]/50"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-[#F49D37] dark:text-[#F49D37]/80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default InputPro

