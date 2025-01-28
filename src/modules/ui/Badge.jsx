import React from 'react';

export function Badge({ children, variant = 'default', className = '' }) {
    const variants = {
        default: 'bg-gray-100 text-gray-800',
        success: 'bg-green-100 text-green-800',
        warning: 'bg-amber-100 text-amber-800',
        danger: 'bg-red-100 text-red-800',
        info: 'bg-blue-100 text-blue-800'
    };

    const classes = `inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium ${variants[variant]} ${className}`;

    return (
        <span className={classes}>
            {children}
        </span>
    );
}