import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';
import SubMenu from './SubMenu';

export default function Navbar({ isHomeSectionMainVisible }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

    const menus = [
        [{ label: 'Home', path: '/' }],
        [{ label: 'Profile', path: '/profile' }],
        [{ label: '자연스러움', path: '/natural' }],
        [{ label: '자연스러움을\n경험하다', path: '/therapy' }],
        [{ label: '수요일,\nCHO를 만나는 날', path: '/wednesday' }],
        [{ label: '교육연구', path: '/rd' }],
        [{ label: '자연으로 돌아가는 곳,\n바른한의원', path: '/contact' }]
    ];

    const subMenus = [
        [
            { label: '자연', path: '/' },
            { label: 'Profile', path: '/profile' },
            { label: '생명', path: '/natural/life' },
            { label: '침/약침/부항', path: '/therapy/chim' },
            { label: 'CEO', path: '/wednesday/ceo' },
            { label: '강사 활동', path: '/rd/instructor' },
            { label: '자연으로', path: '/contact/nature' }
        ],
        [
            { label: '자연스러움을\n잃으면 아픕니다', path: '/Home/Sick' },
            { label: 'Story', path: '/story' },
            { label: '자연스러운\n순환', path: '/natural/cycle' },
            { label: '추나', path: '/therapy/chuna' },
            { label: '운동선수', path: '/wednesday/athlete' },
            { label: '학회', path: '/rd/conference' },
            { label: '하루 15명', path: '/contact/15' }
        ],
        [
            { label: '근골격계의\n단 하나의 목적', path: '/Home/Muscle' },
            null,
            { label: '자연스러운\n구조', path: '/natural/structure' },
            { label: '한약', path: '/therapy/hanyak' },
            { label: '참고자료', path: '/wednesday/ceo' },
            { label: '추나 교육 문의', path: '/rd/education' },
            { label: 'Contact', path: '/contact/info' },   
        ],
        [
            null,
            null,
            { label: '자연스러운\n조절 능력', path: '/natural/regulation' },
            null,
            null,
            null,
            null
        ],
        [
            null,
            null,
            { label: '자연스러운\n영혼과 마음', path: '/natural/mind_soul' },
            null,
            null,
            null,
            null
        ],
   
    ];

    const handleMouseEnter = () => {
        setIsSubMenuVisible(true);
    };

    const handleMouseLeave = () => {
        setIsSubMenuVisible(false);
    };

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
                    {menus.map((row, rowIndex) => (
                        <div key={rowIndex} className="relative">
                            {row.map((menu, colIndex) => (
                                <Link to={menu.path} key={colIndex}>
                                    <button 
                                        className="block w-full text-left px-8 py-6 text-2xl"
                                        style={{ whiteSpace: 'pre-line' }} 
                                        onClick={() => setIsMenuOpen(false)} 
                                    >
                                        {menu.label}
                                    </button>
                                </Link>
                            ))}
                            {rowIndex < menus.length - 1 && (
                                <hr className="mx-4 border-gray-600" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div 
                className={`
                    fixed top-0 left-0 right-0 z-30 
                    transition-colors duration-500 ease-in-out 
                    ${isHomeSectionMainVisible ? 'bg-transparent' : ' bg-white opacity-60'}
                `}
            >
                <div className="
                    hidden lg:flex
                    w-full
                    justify-center space-x-0 text-lg font-SUITERegular 
                    text-gray-600 transition-colors duration-500 ease-in-out
                    "
                >
                    <Menu 
                        menus={menus.flat()} // Flatten the menus array for Menu component
                        handleMouseEnter={handleMouseEnter}
                        handleMouseLeave={handleMouseLeave}
                    />
                    <SubMenu 
                        subMenus={subMenus.flat()} // Flatten the subMenus array for SubMenu component
                        isSubMenuVisible={isSubMenuVisible} 
                        handleMouseEnter={handleMouseEnter}
                        handleMouseLeave={handleMouseLeave}
                    />
                </div>
            </div>
        </>
    );
}
