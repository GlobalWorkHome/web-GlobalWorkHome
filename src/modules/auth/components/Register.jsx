'use client'

import { useTranslations } from 'next-intl'

export default function Register({ onSwitchView }) {
  const t = useTranslations('auth')

  return (
    <form>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">{t('name')}</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
          placeholder={t('placeholders.name')}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">{t('email')}</label>
        <input
          type="email"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
          placeholder={t('placeholders.email')}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">{t('password')}</label>
        <input
          type="password"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
          placeholder={t('placeholders.password')}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition"
      >
        {t('register')}
      </button>
      <div className="text-sm text-center mt-4">
        <p>
          {t('haveAccount')}{' '}
          <button
            type="button"
            className="text-yellow-500 hover:underline"
            onClick={() => onSwitchView('login')}
          >
            {t('login')}
          </button>
        </p>
      </div>
    </form>
  )
}