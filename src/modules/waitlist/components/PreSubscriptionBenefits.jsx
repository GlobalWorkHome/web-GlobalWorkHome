import { FaCheck } from 'react-icons/fa'

const plans = [
  {
    name: '2 avisos',
    price: 10,
    features: ['Publicación de 2 ofertas de trabajo', 'Visibilidad por 30 días', 'Soporte por email'],
  },
  {
    name: '10 avisos',
    price: 36,
    features: ['Publicación de 10 ofertas de trabajo', 'Visibilidad por 60 días', 'Soporte prioritario'],
  },
  {
    name: 'Mensual ilimitado',
    price: 50,
    features: ['Publicaciones ilimitadas', 'Visibilidad permanente', 'Soporte 24/7', 'Destacados en búsquedas'],
  },
  {
    name: 'Anual ilimitado',
    price: 400,
    isSpecial: true,
    features: ['Todo lo del plan mensual', '15 meses por el precio de 12', 'Acceso a estadísticas avanzadas', 'Perfil de empresa destacado'],
  },
]

export default function PreSubscriptionBenefits() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Beneficios de Preinscripción
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Únete a nuestra lista de espera y obtén un 50% de descuento en todos nuestros planes
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative ${plan.isSpecial ? 'bg-yellow-50 border-2 border-yellow-500' : 'bg-white'} rounded-lg shadow-lg p-8`}>
              {plan.isSpecial && (
                <span className="absolute top-0 right-0 px-3 py-1 bg-yellow-500 text-white text-sm font-semibold rounded-bl">
                  Mejor valor
                </span>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-medium text-gray-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline justify-center space-x-2">
                  <span className="text-2xl font-medium text-gray-500 line-through">${plan.price}</span>
                  <span className="text-5xl font-extrabold text-gray-900">${plan.price / 2}</span>
                  <span className="ml-1 text-xl font-medium text-gray-500">USD</span>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  <span className="font-bold text-yellow-600">50% de descuento</span> aplicado
                </p>
              </div>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex">
                    <FaCheck className="flex-shrink-0 w-6 h-6 text-green-500" />
                    <span className="ml-3 text-base text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-xl text-gray-600">
            ¡No pierdas esta oportunidad! Regístrate ahora y asegura tu descuento.
          </p>
        </div>
      </div>
    </div>
  )
}