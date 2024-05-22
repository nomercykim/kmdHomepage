import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menus = [
        { label: 'Home', path: '/' },
        { label: 'Profile', path: '/profile' },
        { label: '자연스러움', path: '/natural' },
        { label: '자연스러움을\n경험하다', path: '/therapy' },
        { label: '수요일,\nCHO를 만나는 날', path: '/wednesday' },
        { label: '교육연구', path: '/rd' },
        { label: '자연으로 돌아가는 곳,\n바른한의원', path: '/contact' }
    ];

    const linkClassNames = (path) => 
        `block px-4 py-2 rounded ${
            currentPath === path ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-200'
        }`;

    return (
        <>
            <button 
                className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                메뉴
            </button>
            <div 
                className={`fixed top-0 left-0 h-full bg-gray-800 text-white shadow-lg transform ${
                    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300`}
                style={{ width: '250px', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} // 50% 투명도 적용
            >
                <div className="mt-16"> {/* 추가된 여백 */}
                    {menus.map((menu, index) => (
                        <div key={index} className="relative">
                            <Link to={menu.path}>
                                <button 
                                    className="block w-full text-left px-4 py-2"
                                    style={{ whiteSpace: 'pre-line' }}
                                >
                                    {menu.label}
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}