import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar({ isHomeSectionMainVisible }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState(null); // 호버링된 메뉴를 추적하기 위한 상태

    const menus = [
        { label: 'Home', path: '/', subMenu: [
            { label: '자연', path: '/' },
            { label: '자연스러움을 잃으면 아픕니다', path: '/Home/Sick' },
            { label: '근골격계의 단 하나의 목적', path: '/Home/Muscle' }
            ]
        },
        { label: 'Profile', path: '/profile', subMenu: [
                { label: 'Profile', path: '/profile' },
                { label: 'Story', path: '/story' }
            ] 
        },
        { label: '자연스러움', path: '/natural', subMenu: [
                { label: '생명', path: '/natural/life' },
                { label: '자연스러운 순환', path: '/natural/cycle' },
                { label: '자연스러운 구조', path: '/natural/structure' },
                { label: '자연스러운 조절 능력', path: '/natural/regulation' },
                { label: '자연스러운 영혼과 마음', path: '/natural/mind_soul' }
            ]
        },
        { label: '자연스러움을\n경험하다', path: '/therapy', subMenu: [
                { label: '침/약침/부항', path: '/therapy/chim' },
                { label: '추나', path: '/therapy/chuna' },
                { label: '한약', path: '/therapy/hanyak' }
            ]
        },
        { label: '수요일,\nCHO를 만나는 날', path: '/wednesday', subMenu: [
                { label: 'CEO', path: '/wednesday/ceo' },
                { label: '운동선수', path: '/wednesday/athlete' },
                { label: '참고자료', path: '/wednesday/ceo' }
            ]
        },
        { label: '교육연구', path: '/rd', subMenu: [
                { label: '강사 활동', path: '/rd/instructor' },
                { label: '학회', path: '/rd/conference' },
                { label: '추나 교육 문의', path: '/rd/education' }
            ] 
        },
        {
            label: '자연으로 돌아가는 곳,\n바른한의원', path: '/contact', subMenu: [
                { label: '자연으로', path: '/contact/nature' },
                { label: '하루 15명', path: '/contact/15' },
                { label: 'Contact', path: '/contact/info' },
            ]
        },
    ];

    return (
        <>
            <button 
                className="
                    fixed top-4 right-4 z-50 
                    bg-gray-400 text-black 
                    opacity-40 p-2 rounded 
                    lg:hidden" 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                style={{ width: '40px', height: '40px' }} 
            >
                <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
            <div 
                className={`
                    fixed top-0 right-0 h-full 
                    bg-gray-800 text-gray-300 font-SUITERegular shadow-lg 
                    transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                    transition-transform duration-300 z-40 
                    lg:hidden`} 
                style={{ width: '300px', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} 
            >
                <div className="mt-32">
                    {menus.map((menu, index) => (
                        <div key={index} className="relative">
                            <Link to={menu.path}>
                                <button 
                                    className="block w-full text-left px-8 py-6 text-2xl"
                                    style={{ whiteSpace: 'pre-line' }} 
                                    onClick={() => setIsMenuOpen(false)} 
                                >
                                    {menu.label}
                                </button>
                            </Link>
                            {index < menus.length - 1 && (
                                <hr className="mx-4 border-gray-600" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div 
                className={`
                    fixed top-0 left-0 right-0 z-30 
                    p-0 lg:p-6 
                    transition-colors duration-500 ease-in-out 
                    ${isHomeSectionMainVisible ? 'bg-transparent' : ' bg-white opacity-60'}
                `}
            >
                <div className="
                    hidden lg:flex
                    w-full
                    justify-center space-x-12 text-lg font-SUITERegular 
                    text-gray-600 transition-colors duration-500 ease-in-out
                    "
                >
                    {menus.map((menu, index) => (
                        <div 
                            key={index} 
                            className="relative"
                            onMouseEnter={() => setHoveredMenu(index)}
                            onMouseLeave={() => setHoveredMenu(null)}
                        >
                            <Link to={menu.path}>
                                <button 
                                    className="transition-colors duration-500 ease-in-out hover:text-gray-100 hover:text-bold" 
                                    style={{ whiteSpace: 'pre-line' }} 
                                >
                                    {menu.label}
                                </button>
                            </Link>
                            {/* 서브 메뉴를 조건부로 렌더링 */}
                            {hoveredMenu === index && menu.subMenu.length > 0 && (
                                <div className="absolute top-full left-0 w-full bg-white shadow-lg z-30">
                                    {menu.subMenu.map((subMenu, subIndex) => (
                                        <Link 
                                            key={subIndex} 
                                            to={subMenu.path} 
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                        >
                                            {subMenu.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
