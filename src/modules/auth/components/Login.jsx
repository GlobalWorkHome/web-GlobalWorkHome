'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function Login({ onSwitchView, onLogin }) {
  const t = useTranslations('auth')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulación de autenticación
    if (email === 'test@gmail.com' && password === 'pass') {
      onLogin('Jesús Manuel')
    } else {
      setError('Correo o contraseña incorrectos')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">{t('email')}</label>
        <input
          type="email"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
          placeholder={t('placeholders.email')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">{t('password')}</label>
        <input
          type="password"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
          placeholder={t('placeholders.password')}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <button
        type="submit"
        className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition"
      >
        {t('login')}
      </button>
      <div className="text-sm text-center mt-4">
        <button
          type="button"
          className="text-yellow-500 hover:underline"
          onClick={() => onSwitchView('forgotPassword')}
        >
          {t('forgotPasswordPrompt')}
        </button>
        <p className="mt-2">
          {t('noAccount')}{' '}
          <button
            type="button"
            className="text-yellow-500 hover:underline"
            onClick={() => onSwitchView('register')}
          >
            {t('register')}
          </button>
        </p>
      </div>
    </form>
  )
}