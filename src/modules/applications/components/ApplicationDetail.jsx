import React from 'react';
import { useTranslations } from 'next-intl';

const ApplicationDetail = ({ params, onBack }) => {
  const t = useTranslations('applications1');
  const commonT = useTranslations('common');
  const applications = t.raw('applications');
  const application = applications.find(app => app.id === params.id);

  if (!application) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-gray-600">{commonT('error')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="mb-6 inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        >
          ← {commonT('backToHome')}
        </button>

        <div className="overflow-hidden rounded-xl bg-white shadow">
          <div className="border-b border-gray-200 bg-white px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-900">{application.jobTitle}</h2>
            <p className="mt-1 text-sm text-gray-500">{application.company}</p>
          </div>

          <div className="bg-white px-6 py-4">
            <dl className="grid gap-4">
              <div className="grid grid-cols-3 gap-4 rounded-lg bg-gray-50 p-4">
                <dt className="text-sm font-medium text-gray-500">
                  {t('columns.applicationDate')}
                </dt>
                <dd className="col-span-2 text-sm text-gray-900">
                  {application.date}
                </dd>
              </div>

              <div className="grid grid-cols-3 gap-4 rounded-lg bg-gray-50 p-4">
                <dt className="text-sm font-medium text-gray-500">
                  {t('columns.status')}
                </dt>
                <dd className="col-span-2">
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                    application.status === 'pendiente' ? 'bg-amber-100 text-amber-800' :
                    application.status === 'entrevistado' ? 'bg-blue-100 text-blue-800' :
                    application.status === 'ofrecido' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {application.status}
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetail;

