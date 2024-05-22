import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SubMenu({ links }) {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className="fixed top-0 left-0 right-0 bg-white shadow-lg z-40">
            <div className="flex justify-center space-x-4 py-2">
                {links.map((link, index) => (
                    <Link 
                        key={index}
                        to={link.path}
                        className={`block px-4 py-2 text-gray-800 ${
                            currentPath === link.path ? 'bg-gray-300' : 'hover:bg-gray-200'
                        }`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}