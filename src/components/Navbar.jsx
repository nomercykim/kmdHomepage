import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="bg-gray-800 p-4 flex justify-center space-x-6 text-lg">
            <Link to='/' className="text-white hover:text-gray-300">Home</Link>
            <Link 
                to='/profile'
                className="text-white hover:text-gray-300"
            >
                    Profile
            </Link>
            <Link
                to='/natural'
                className="text-white hover:text-gray-300"
                onMouseEnter={()=> setIsDropdownOpen(true)}
                onmouseleave={()=> setIsDropdownOpen(false)}
            >
                자연스러움{isDropdownOpen && (
                    <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md"> 
                        <Link></Link>
                    </div>
                )}
            </Link>
            <Link 
                to='/therapy'
                className="text-white hover:text-gray-300"
            >
                    자연스러움을 경험하다
            </Link>
            <Link
                to='/wednesday'
                className="text-white hover:text-gray-300"
            >
                    수요일, CHO를 만나는 날
            </Link>
            <Link
                to='/rd'
                className="text-white hover:text-gray-300"
            >
                    교육연구
            </Link>
            <Link
                to='/contact'
                className="text-white hover:text-gray-300"
            >
                    자연으로 돌아가는 곳, 바른한의원
            </Link>
        </nav>
    );
}




