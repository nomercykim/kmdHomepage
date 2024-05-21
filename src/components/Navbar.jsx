import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/natural'>자연스러움</Link>
            <Link to='/therapy'>자연스러움을 경험하다</Link>
            <Link to='/wednesday'>수요일, CHO를 만나는 날</Link>
            <Link to='/rd'>교육연구</Link>
            <Link to='/contact'>자연으로 돌아가는 곳, 바른한의원</Link>
        </div>
    );
}




