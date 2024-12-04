import React from 'react'
import Logo from './Logo'
import NavMenu from './NavMenu'
import AuthButtons from './AuthButtons'

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <NavMenu />
          <AuthButtons />
        </div>
      </div>
    </header>
  )
}

