import React from 'react';

export function Table({ children }) {
    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
                {children}
            </table>
        </div>
    );
}

export function TableBody({ children }) {
    return <tbody className="divide-y divide-gray-200">{children}</tbody>;
}

export function TableCell({ children }) {
    return (
        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700 text-center">
            {children}
        </td>
    );
}

export function TableHead({ children }) {
    return (
        <thead className="bg-gray-50">
            {children}
        </thead>
    );
}

export function TableHeader({ children }) {
    return (
        <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500 text-center">
            {children}
        </th>
    );
}

export function TableRow({ children }) {
    return (
        <tr className="transition-colors hover:bg-gray-50">
            {children}
        </tr>
    );
}