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
        [{ label: 'Profile', path: '/Profile' }],
        [{ label: '자연스러움', path: '/Natural' }],
        [{ label: '자연스러움을\n경험하다', path: '/Therapy' }],
        [{ label: '수요일,\nCHO를 만나는 날', path: '/Wednesday' }],
        [{ label: '교육연구', path: '/Research' }],
        [{ label: '자연으로 돌아가는 곳,\n바른한의원', path: '/Contact' }]
    ];

    const subMenus = [
        [
            { label: '자연', path: '/#HomeSectionMain' },
            { label: 'Profile', path: '/#ProfileMain' },
            { label: '생명', path: '/#NaturalMain' },
            { label: '침/약침/부항', path: '/#Acupuncture' },
            { label: 'CEO', path: '/#Ceo' },
            { label: '강사 활동', path: '/#Instructor' },
            { label: '자연으로', path: '/#ContactNature' }
        ],
        [
            { label: '자연스러움을\n잃으면 아픕니다', path: '/#HomeSection2' },
            { label: 'Story', path: '/#Story' },
            { label: '자연스러운\n순환', path: '/#NaturalCycle' },
            { label: '추나', path: '/#Chuna' },
            { label: '운동선수', path: '/#Athlete' },
            { label: '학회', path: '/#Conference' },
            { label: '하루 15명', path: '/#Oneday' }
        ],
        [
            { label: '근골격계의\n단 하나의 목적', path: '/#HomeSection3' },
            null,
            { label: '자연스러운\n구조', path: '/#NaturalStructure' },
            { label: '한약', path: '/#HerbMedicine' },
            { label: '참고자료', path: '/#Reference' },
            { label: '추나 교육 문의', path: '/#Education' },
            { label: 'Contact', path: '/#Info' },   
        ],
        [
            null,
            null,
            { label: '자연스러운\n조절 능력', path: '/#NaturalRegulation' },
            null,
            null,
            null,
            null
        ],
        [
            null,
            null,
            { label: '자연스러운\n영혼과 마음', path: '/#NaturalMindSoul' },
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
                `}
            >
                <div className={`
                    hidden lg:flex
                    w-full
                    justify-center space-x-0 text-lg font-SUITERegular 
                    text-gray-600 transition-colors duration-500 ease-in-out
                    ${isHomeSectionMainVisible ? 'bg-transparent' : ' bg-white'}
                    `}
                >
                    <Menu 
                        menus={menus.flat()} 
                        handleMouseEnter={handleMouseEnter}
                        handleMouseLeave={handleMouseLeave}
                    />
                    <SubMenu 
                        subMenus={subMenus.flat()}
                        isSubMenuVisible={isSubMenuVisible} 
                        handleMouseEnter={handleMouseEnter}
                        handleMouseLeave={handleMouseLeave}
                    />
                </div>
            </div>
        </>
    );
}
