'use client'

import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import Logo from './Logo'
import NavMenu from './NavMenu'
import AuthButtons from './AuthButtons'
import AuthModal from '@/modules/auth/components/AuthModal'
import NavbarDropdown from './NavbarDropdown'

export default function Navbar() {
  const [isAuthModalOpen, setAuthModalOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState('')
  const t = useTranslations('auth')

  const handleLogin = (name) => {
    setIsLoggedIn(true)
    setUserName(name)
    setAuthModalOpen(false)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserName('')
  }

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <NavMenu />
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <NavbarDropdown userName={userName} onLogout={handleLogout} />
            ) : (
              <AuthButtons onLoginClick={() => setAuthModalOpen(true)} />
            )}
          </div>
        </div>
      </div>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setAuthModalOpen(false)} onLogin={handleLogin} />
    </header>
  )
}



// 'use client'

// import React, { useState } from 'react'
// import { useTranslations } from 'next-intl'
// import { FaSignOutAlt } from 'react-icons/fa'
// import Logo from './Logo'
// import NavMenu from './NavMenu'
// import AuthButtons from './AuthButtons'
// import AuthModal from '@/modules/auth/components/AuthModal'

// export default function Navbar() {
//   const [isAuthModalOpen, setAuthModalOpen] = useState(false)
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   const [userName, setUserName] = useState('')
//   const t = useTranslations('auth')

//   const handleLogin = (name) => {
//     setIsLoggedIn(true)
//     setUserName(name)
//     setAuthModalOpen(false)
//   }

//   const handleLogout = () => {
//     setIsLoggedIn(false)
//     setUserName('')
//   }

//   return (
//     <header className="border-b bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex h-16 items-center justify-between">
//           <Logo />
//           <NavMenu />
//           <div className="flex items-center space-x-4">
//             {isLoggedIn ? (
//               <>
//                 <span className="text-sm font-medium text-gray-700">{t('hello')}, {userName}</span>
//                 <button onClick={handleLogout} className="text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center space-x-1">
//                   <FaSignOutAlt className="h-5 w-5" />
//                   <span>{t('logout')}</span>
//                 </button>
//               </>
//             ) : (
//               <AuthButtons onLoginClick={() => setAuthModalOpen(true)} />
//             )}
//           </div>
//         </div>
//       </div>
//       <AuthModal isOpen={isAuthModalOpen} onClose={() => setAuthModalOpen(false)} onLogin={handleLogin} />
//     </header>
//   )
// }