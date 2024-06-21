import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { StateProvider, useStateContext } from '../hooks/StateContext';

export default function Root() {
    return (
        <StateProvider>
            <div>
                <NavbarWithContext />
                <Outlet />
            </div>
        </StateProvider>
    );
}

function NavbarWithContext() {
    const { isSectionMainVisible } = useStateContext();
    
    // 상태를 확인하기 위한 콘솔 로그
    console.log("isHomeSectionMainVisible:", isSectionMainVisible);
    
    return <Navbar isHomeSectionMainVisible={isSectionMainVisible} />;
}
