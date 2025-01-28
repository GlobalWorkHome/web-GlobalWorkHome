import React from 'react';

export function Select({ children, ...props }) {
    return (
        <select className="select bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" {...props}>
            {children}
        </select>
    );
}