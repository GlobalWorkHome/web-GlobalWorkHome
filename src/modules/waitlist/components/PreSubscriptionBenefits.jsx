import { FaCheck } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

const plans = [
  {
    name: '2_ads',
    price: 10,
    features: ['feature1', 'feature2', 'feature3'],
  },
  {
    name: '10_ads',
    price: 36,
    features: ['feature1', 'feature2', 'feature3'],
  },
  {
    name: 'monthly_unlimited',
    price: 50,
    features: ['feature1', 'feature2', 'feature3', 'feature4'],
  },
  {
    name: 'annual_unlimited',
    price: 400,
    isSpecial: true,
    features: ['feature1', 'feature2', 'feature3', 'feature4'],
  },
]

export default function PreSubscriptionBenefits() {
  const t = useTranslations('PreSubscriptionBenefits')

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative ${plan.isSpecial ? 'bg-yellow-50 border-2 border-yellow-500' : 'bg-white'} rounded-lg shadow-lg p-8`}>
              {plan.isSpecial && (
                <span className="absolute top-0 right-0 px-3 py-1 bg-yellow-500 text-white text-sm font-semibold rounded-bl">
                  {t('bestValue')}
                </span>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-medium text-gray-900">{t(`plans.${plan.name}.name`)}</h3>
                <div className="mt-4 flex items-baseline justify-center space-x-2">
                  <span className="text-2xl font-medium text-gray-500 line-through">${plan.price}</span>
                  <span className="text-5xl font-extrabold text-gray-900">${plan.price / 2}</span>
                  <span className="ml-1 text-xl font-medium text-gray-500">USD</span>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  <span className="font-bold text-yellow-600">{t('discount')}</span> {t('applied')}
                </p>
              </div>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={feature} className="flex">
                    <FaCheck className="flex-shrink-0 w-6 h-6 text-green-500" />
                    <span className="ml-3 text-base text-gray-700">{t(`plans.${plan.name}.${feature}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-xl text-gray-600">
            {t('callToAction')}
          </p>
        </div>
      </div>
    </div>
  )
}