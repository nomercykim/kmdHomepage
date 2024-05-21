import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname;
    const [isNaturalMenuOpen, setIsNaturalMenuOpen] = useState(false);
    const [isTherapyMenuOpen, setIsTherapyMenuOpen] = useState(false);

    const linkClassNames = (path) => 
        `flex items-center justify-center px-4 py-2 rounded text-center ${
            currentPath === path ? 'bg-gray-700 text-white' : 'text-gray-300 hover:text-white'
        }`;

    return (
        <nav className="bg-gray-800 p-4 flex justify-center space-x-6 text-sm">
            <Link to='/' className={linkClassNames('/')}>
                <button className="w-40 h-12">Home</button>
            </Link>
            <div
                className="relative"
                onMouseEnter={() => setIsNaturalMenuOpen(true)}
                onMouseLeave={() => setIsNaturalMenuOpen(false)}
            >
                <Link to='/profile'>
                    <button 
                        className={linkClassNames('/profile')}
                        onMouseEnter={()=>setIsNaturalMenuOpen(true)}
                    >
                        Profile
                    </button>
                </Link>
                {isTherapyMenuOpen && (
                    <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md">
                        <Link to='' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</Link>
                        <Link to='' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Story</Link>
                    </div>
                )}
            </div>
            
            <div
                className="relative"
                onMouseEnter={() => setIsNaturalMenuOpen(true)}
                onMouseLeave={() => setIsNaturalMenuOpen(false)}
            >
                <Link to='/natural'>
                    <button 
                        className={linkClassNames('/natural')} 
                        onMouseEnter={() => setIsNaturalMenuOpen(true)}
                    >
                        자연스러움
                    </button>
                </Link>
                {isNaturalMenuOpen && (
                    <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md">
                        <Link to='' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">생명</Link>
                        <Link to='' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">자연스러운 순환</Link>
                        <Link to='' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">자연스러운 구조</Link>
                        <Link to='' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">자연스러운 조절 능력</Link>
                        <Link to='' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">자연스러운 영혼과 마음</Link>
                    </div>
                )}
            </div>
            <div
                className="relative"
                onMouseEnter={() => setIsTherapyMenuOpen(true)}
                onMouseLeave={() => setIsTherapyMenuOpen(false)}
            >
                <Link to='/therapy'>
                    <button 
                        className={linkClassNames('/therapy')} 
                        onMouseEnter={() => setIsTherapyMenuOpen(true)}
                    >
                        자연스러움을 경험하다
                    </button>
                </Link>
                {isTherapyMenuOpen && (
                    <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md">
                        <Link to='' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">침/약침/부항</Link>
                        <Link to='' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">추나</Link>
                        <Link to='' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">한약</Link>
                    </div>
                )}
            </div>
            <div
                className="relative"
                onMouseEnter={() => setIsTherapyMenuOpen(true)}
                onMouseLeave={() => setIsTherapyMenuOpen(false)}
            >
                <Link to='/wednesday' >
                    <button 
                        className={linkClassNames('/wednesday')}
                        onMouseEnter={() => setIsTherapyMenuOpen(true)}
                    >
                        수요일, CHO를 만나는 날
                    </button>
                </Link>
                {isTherapyMenuOpen && (
                    <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md">
                        <Link to='' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">운동선수</Link>
                        <Link to='' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">CEO</Link>
                    </div>
                )}
            </div>
            <div>
                <Link to='/rd'>
                    <button 
                        className="w-40 h-12"
                        className={linkClassNames('/rd')}
                    >
                        교육연구
                    </button>
                </Link>
                {isTherapyMenuOpen && (
                    <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md">
                        <Link to='' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">강사 활동</Link>
                        <Link to='' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">학회</Link>
                        <Link to='' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">추나 교육 문의</Link>
                    </div>
                )}
            </div>
            <div>
                <Link to='/contact'>
                    <button 
                        className={linkClassNames('/contact')}
                    >
                        자연으로 돌아가는 곳,<br />바른한의원
                    </button>
                </Link>
                {isTherapyMenuOpen && (
                    <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md">
                            <Link to='' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">하루 15명</Link>
                            <Link to='' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">진료과목</Link>
                            <Link to='' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">contact</Link>
                            <Link to='' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">오시는 길</Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
