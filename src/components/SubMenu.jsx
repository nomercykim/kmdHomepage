import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SubMenu({ links }) {
    const location = useLocation();
    const currentPath = location.pathname; // 현재 경로를 가져옵니다.

    return (
        <div className="fixed top-0 left-0 right-0 bg-white shadow-lg z-30"> {/* 서브메뉴의 스타일과 위치를 설정 */}
            <div className="flex justify-center space-x-4 py-2">
                {links.map((link, index) => (
                    <Link 
                        key={index}
                        to={link.path}
                        className={`block px-4 py-2 text-gray-800 ${
                            currentPath === link.path ? 'bg-gray-300' : 'hover:bg-gray-200'
                        }`} // 현재 경로와 일치하는 경우 배경 색상 변경
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}