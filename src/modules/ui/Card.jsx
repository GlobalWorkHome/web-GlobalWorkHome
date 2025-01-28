import React from 'react';

export function Card({ children }) {
    return <div className="card bg-white shadow-md rounded-lg p-4">{children}</div>;
}

export function CardContent({ children }) {
    return <div className="card-content">{children}</div>;
}

export function CardHeader({ children }) {
    return <div className="card-header border-b pb-2 mb-4">{children}</div>;
}

export function CardTitle({ children }) {
    return <div className="card-title text-xl font-semibold">{children}</div>;
}