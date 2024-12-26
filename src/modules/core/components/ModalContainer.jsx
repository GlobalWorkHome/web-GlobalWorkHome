'use client'
import { useEffect } from "react"

export const ModalContainer = ({ children, show, onClose }) => {
  
  useEffect(() => {
    const body = document.querySelector('body')
    if( show ){
      body.classList.add('overflow-hidden')
    }else {
      body.classList.remove('overflow-hidden')
    }

  return () => {
    body.classList.remove('overflow-hidden')
  }
}, [show])


  if( !show ){ return null }

  return (
    <div
      className="fixed inset-0 h-screen max-h-screen overflow-hidden flex justify-center items-center z-50"
    >
      <div 
        onClick={ onClose } 
        className="fixed inset-0 bg-black/50 z-40 animate-fade animate-duration-300">
      </div>
      <div className="z-50 bg-white rounded-md p-1 animate-fade-down animate-duration-300">
        { children }
      </div>
    </div>
  )
}
