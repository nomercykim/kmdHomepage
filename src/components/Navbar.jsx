import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar({ isHomeSectionMainVisible }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // 메뉴의 열림 상태를 관리하는 상태 변수입니다.

    const menus = [
        { label: 'Home', path: '/' },
        { label: 'Profile', path: '/profile' },
        { label: '자연스러움', path: '/natural' },
        { label: '자연스러움을\n경험하다', path: '/therapy' },
        { label: '수요일,\nCHO를 만나는 날', path: '/wednesday' },
        { label: '교육연구', path: '/rd' },
        { label: '자연으로 돌아가는 곳,\n바른한의원', path: '/contact' },
    ];

    return (
        <>
            {/* 메뉴 버튼 (작은 화면용) */}
            <button 
                className="
                    fixed top-4 right-4 z-50 
                    bg-gray-400 text-black 
                    opacity-40 p-2 rounded 
                    md:hidden" // md 이상에서는 숨김
                onClick={() => setIsMenuOpen(!isMenuOpen)} // 클릭 시 메뉴의 열림 상태를 토글
                style={{ width: '40px', height: '40px' }} // 버튼의 너비와 높이를 정사각형으로 설정
            >
                <FontAwesomeIcon icon={faBars} size="lg" /> {/* 아이콘의 크기를 large로 설정 */}
            </button>
            {/* 사이드바 (작은 화면용) */}
            <div 
                className={`
                    fixed top-0 right-0 h-full 
                    bg-gray-800 text-gray-300 font-SUITERegular shadow-lg 
                    transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                    transition-transform duration-300 z-40 
                    md:hidden`} // md 이상에서는 숨김
                style={{ width: '300px', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} // 사이드바의 너비와 배경 색상 설정
            >
                <div className="mt-32"> {/* 상단 여백 추가 */}
                    {menus.map((menu, index) => (
                        <div key={index} className="relative">
                            <Link to={menu.path}>
                                <button 
                                    className="block w-full text-left px-8 py-6 text-2xl"
                                    style={{ whiteSpace: 'pre-line' }} // 텍스트 줄 바꿈 설정
                                    onClick={() => setIsMenuOpen(false)} // 링크를 클릭하면 사이드바를 닫음
                                >
                                    {menu.label}
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            {/* 상단 네비게이션 바 (큰 화면용) */}
            <div className={`
                hidden md:block fixed
                top-0 left-0 w-full
                ${isHomeSectionMainVisible ? 'bg-transparent' : 'bg-white'} 
                text-gray-300 font-SUITERegular 
                z-20`}
            >
                <div className="flex justify-center items-center p-10">
                    <div className="flex space-x-8
                    ">
                        {menus.map((menu, index) => (
                            <Link key={index} to={menu.path} className="text-lg">
                                {menu.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
