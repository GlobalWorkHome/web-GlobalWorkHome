import { useTranslations } from 'next-intl';

export function HowItWorks() {
  const t = useTranslations('HowItWorks');

  const steps = [
    { key: 'createProfile', number: 1 },
    { key: 'searchJobs', number: 2 },
    { key: 'applyEasily', number: 3 },
    { key: 'getHired', number: 4 },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.key} className="p-6">
              <div className="bg-yellow-600 text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{t(`steps.${step.key}.title`)}</h3>
              <p className="text-gray-600">{t(`steps.${step.key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



// export function HowItWorks() {
//    return (
//      <section className="bg-white py-12">
//        <div className="container mx-auto px-6 text-center">
//          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
//          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//            <div className="p-6">
//              <div className="bg-yellow-600 text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
//                1
//              </div>
//              <h3 className="text-xl font-semibold mb-2">Create a Profile</h3>
//              <p className="text-gray-600">Sign up and build your professional profile.</p>
//            </div>
//            <div className="p-6">
//              <div className="bg-yellow-600 text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
//                2
//              </div>
//              <h3 className="text-xl font-semibold mb-2">Search for Jobs</h3>
//              <p className="text-gray-600">Use filters to find jobs that match your skills.</p>
//            </div>
//            <div className="p-6">
//              <div className="bg-yellow-600 text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
//                3
//              </div>
//              <h3 className="text-xl font-semibold mb-2">Apply Easily</h3>
//              <p className="text-gray-600">Submit your application with a single click.</p>
//            </div>
//            <div className="p-6">
//              <div className="bg-yellow-600 text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
//                4
//              </div>
//              <h3 className="text-xl font-semibold mb-2">Get Hired</h3>
//              <p className="text-gray-600">Connect with companies and start your journey.</p>
//            </div>
//          </div>
//        </div>
//      </section>
//    );
//  }
 