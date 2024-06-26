import React from 'react';
import { Link } from 'react-router-dom';

function Menu({ menus, handleMouseEnter, handleMouseLeave }) {
    return (
        <>
            {menus.map((menu, index) => (
                <div 
                    key={index} 
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link to={menu.path}>
                        <button 
                            className="transition-colors duration-500 ease-in-out hover:text-gray-100 hover:font-bold w-40 h-12"
                            style={{ whiteSpace: 'pre-line' }} 
                        >
                            {menu.label}
                        </button>
                    </Link>
                </div>
            ))}
        </>
    );
}

export default Menu;
