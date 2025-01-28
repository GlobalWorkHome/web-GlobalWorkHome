import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';

export default function AuthModal({ isOpen, onClose, onLogin }) {
  const [view, setView] = useState('login');
  const t = useTranslations('auth');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
      
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          &#x2715;
        </button>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {view === 'login' && t('login')}
            {view === 'register' && t('register')}
            {view === 'forgotPassword' && t('forgotPassword')}
          </h2>
        </div>

        {view === 'login' && <Login onSwitchView={setView} onLogin={onLogin} />}
        {view === 'register' && <Register onSwitchView={setView} />}
        {view === 'forgotPassword' && <ForgotPassword onSwitchView={setView} />}
      </div>
    </div>
  );
}