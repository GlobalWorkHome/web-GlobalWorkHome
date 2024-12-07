
import { LanguageSwitcher } from '@/modules/core/components/LanguageSwitcher'
import { FaChevronDown } from 'react-icons/fa';

export default function AuthButtons() {
  return (
    <div className="flex items-center space-x-4">
      {/* Dropdown Menu */}
      <div className="relative">
        <button className="flex items-center space-x-1 bg-transparent border-none p-2 text-gray-700 hover:text-black focus:outline-none">
          <span>Login</span>
          <FaChevronDown className="h-4 w-4" />
        </button>
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md text-gray-700">
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none">
            Employee Login
          </button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none">
            Employer Login
          </button>
        </div>
      </div>
      
      {/* Employer Button */}
      <button
  className="px-4 py-2 text-white bg-yellow-600 rounded-md focus:outline-none hover:bg-yellow-500"
>
  Employer
</button>

{/* Worker Button */}
<button
  className="px-4 py-2 text-white bg-gray-800 rounded-md focus:outline-none hover:bg-gray-700"
>
  Worker
</button>
<div className='z-[99]'>
<LanguageSwitcher/>
</div>
</div>
  );
}