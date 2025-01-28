import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

import { MdWork, MdBusiness, MdDateRange, MdInfo } from 'react-icons/md';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/modules/ui/Table'
import { Badge } from '@/modules/ui/Badge'
import { Pagination } from '@/modules/ui/Pagination'
import { ButtonPro } from '@/modules/ui/ButtonPro'

const ITEMS_PER_PAGE = 6;

const getStatusVariant = (status) => {
    switch (status) {
        case 'pendiente':
            return 'warning';
        case 'entrevistado':
            return 'info';
        case 'ofrecido':
            return 'success';
        case 'rechazado':
            return 'danger';
        default:
            return 'default';
    }
};

const ApplicationsDashboard = ({ onViewDetails }) => {
    const t = useTranslations('applications1');
    const applications = t.raw('applications');
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(applications.length / ITEMS_PER_PAGE);

    const getCurrentPageItems = () => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return applications.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">
                        {t('details')}
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">
                        Gestiona tus aplicaciones y seguimiento de procesos
                    </p>
                </div>
                
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeader>
                                <MdWork className="inline mr-2" />
                                {t('columns.jobTitle')}
                            </TableHeader>
                            <TableHeader>
                                <MdBusiness className="inline mr-2" />
                                {t('columns.company')}
                            </TableHeader>
                            <TableHeader>
                                <MdDateRange className="inline mr-2" />
                                {t('columns.applicationDate')}
                            </TableHeader>
                            <TableHeader>
                                <MdInfo className="inline mr-2" />
                                {t('columns.status')}
                            </TableHeader>
                            <TableHeader>{t('columns.actions')}</TableHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {getCurrentPageItems().map((application) => (
                            <TableRow key={application.id}>
                                <TableCell>
                                    <div className="font-medium text-gray-900">
                                        {application.jobTitle}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div>
                                        {application.company}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div>
                                        {application.date}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex justify-center">
                                        <Badge variant={getStatusVariant(application.status)}>
                                            {application.status}
                                        </Badge>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex justify-center">
                                        <ButtonPro
                                            variant="primary"
                                            size="sm"
                                            onClick={() => onViewDetails(application.id)}
                                        >
                                            {t('viewDetails')}
                                        </ButtonPro>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default ApplicationsDashboard;