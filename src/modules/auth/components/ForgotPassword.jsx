'use client'

import { useTranslations } from 'next-intl'

export default function ForgotPassword({ onSwitchView }) {
  const t = useTranslations('auth')

  return (
    <form>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">{t('email')}</label>
        <input
          type="email"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
          placeholder={t('placeholders.email')}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition"
      >
        {t('resetPassword')}
      </button>
      <div className="text-sm text-center mt-4">
        <button
          type="button"
          className="text-yellow-500 hover:underline"
          onClick={() => onSwitchView('login')}
        >
          {t('remembered')}
        </button>
      </div>
    </form>
  )
}