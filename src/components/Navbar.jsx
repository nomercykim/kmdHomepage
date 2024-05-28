import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname; // 현재 경로를 가져옵니다.
    const [isMenuOpen, setIsMenuOpen] = useState(false); // 메뉴의 열림 상태를 관리하는 상태 변수입니다.

    const menus = [
        { label: 'Home', path: '/' },
        { label: 'Profile', path: '/profile' },
        { label: '자연스러움', path: '/natural' },
        { label: '자연스러움을\n경험하다', path: '/therapy' },
        { label: '수요일,\nCHO를 만나는 날', path: '/wednesday' },
        { label: '교육연구', path: '/rd' },
        { label: '자연으로 돌아가는 곳,\n바른한의원', path: '/contact' }
    ];

    return (
        <>
            {/* 메뉴 버튼 */}
            <button 
                className="fixed top-14 right-14 z-50 bg-gray-400 text-black opacity-40 p-2 rounded" // 버튼의 스타일과 위치를 설정
                onClick={() => setIsMenuOpen(!isMenuOpen)} // 클릭 시 메뉴의 열림 상태를 토글
                style={{ width: '40px', height: '40px' }} // 버튼의 너비와 높이를 정사각형으로 설정
            >
                <FontAwesomeIcon icon={faBars} size="lg" /> {/* 아이콘의 크기를 large로 설정 */}
            </button>
            {/* 사이드바 */}
            <div 
                className={`fixed top-0 right-0 h-full bg-gray-800 text-white font-SUITERegular shadow-lg transform ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 z-40`} // 사이드바의 스타일과 열림/닫힘 상태에 따른 애니메이션 설정
                style={{ width: '250px', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} // 사이드바의 너비와 배경 색상 설정
            >
                <div className="mt-28"> {/* 상단 여백 추가 */}
                    {menus.map((menu, index) => (
                        <div key={index} className="relative">
                            <Link to={menu.path}>
                                <button 
                                    className="block w-full text-left px-4 py-2 "
                                    style={{ whiteSpace: 'pre-line' }} // 텍스트 줄 바꿈 설정
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