import React from 'react';
import { Link } from 'react-router-dom';

function SubMenu({ subMenus = [], isSubMenuVisible, handleMouseEnter, handleMouseLeave }) {
    return (
        <>
            {isSubMenuVisible && (
                <div 
                    className="absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="grid grid-cols-7 gap-4">
                        {subMenus.map((subMenu, subIndex) => (
                            <Link to={subMenu.path} key={subIndex}>
                                <button className="block w-40 h-12 w-full h-full">
                                    {subMenu.label}
                                </button>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default SubMenu;
