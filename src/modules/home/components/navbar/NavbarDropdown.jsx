import React, { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { MdArrowDropDown } from 'react-icons/md';
import { FaSignOutAlt } from 'react-icons/fa';
import { FaUser } from "react-icons/fa";

const NavbarDropdown = ({ userName, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const t = useTranslations('Navbar');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900"
      >
        <FaUser className='w-4 h-4' />
        <span>{t('hello')}, {userName}</span>
        <MdArrowDropDown
          className={`transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Link href="/en/applications" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              {t('applications')}
            </Link>
            <button
              onClick={() => {
                onLogout();
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <span className="flex items-center">
                <FaSignOutAlt className="mr-2" />
                {t('logout')}
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarDropdown;

