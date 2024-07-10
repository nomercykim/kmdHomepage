import React from 'react';
import { Link } from 'react-router-dom';

function SubMenu({ subMenus = [], isSubMenuVisible, handleMouseEnter, handleMouseLeave }) {
    return (
        <>
            {isSubMenuVisible && (
                <div 
                    className="
                        absolute top-full left-1/2 transform -translate-x-1/2 
                        text-white
                        bg-gray-800"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(7, minmax(160px, 1fr))', gap: '0px' }}
                >
                    {subMenus.map((subMenu, subIndex) => (
                        subMenu && subMenu.path ? (
                            <Link to={subMenu.path} key={subIndex}>
                                <button className="block w-full h-16 text-center px-4 text-base"
                                        dangerouslySetInnerHTML={{ __html: subMenu.label.replace(/\n/g, '<br/>') }}>
                                </button>
                            </Link>
                        ) : (
                            <button key={subIndex} className="block w-full h-16" />
                        )
                    ))}
                </div>
            )}
        </>
    );
}

export default SubMenu;
