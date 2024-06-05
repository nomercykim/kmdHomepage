import React from 'react';
import SubMenu from '../components/SubMenu';


const therapySubMenuLinks = [
    { label: '침/약침/부항', path: '/therapy/chim' },
    { label: '추나', path: '/therapy/chuna' },
    { label: '한약', path: '/therapy/hanyak' }
];

export default function Therapy() {
    return (
        <div className="h-screen overflow-hidden">
            <SubMenu links={therapySubMenuLinks} />
            <div style={{ whiteSpace: 'pre-line' }}>
                {`
                `}
            </div>
            자연스러움을 경험하다.
        </div>
    );
}

