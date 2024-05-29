import React, { useRef } from 'react';
import 'tailwindcss/tailwind.css';
import '../index.css';
import HomeSectionMain from './Home/HomeSectionMain';
import HomeSection2 from './Home/HomeSection2';
import HomeSection3 from './Home/HomeSection3';
import { SectionObserver } from '../hooks/SectionObserver';


export default function Home() {
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);

    const isSection2Visible = SectionObserver(section2Ref, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    });

    const isSection3Visible = SectionObserver(section3Ref, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    });

    return (
        <div className="h-screen overflow-hidden">
            <div className="fixed top-0 w-full flex justify-between items-center p-14 z-20">
                <img src="/onlyLogo_gray.png" alt="Logo" className="w-[51px] h-[51px]" />
            </div>
            <div className="fixed bottom-0 w-full flex justify-between items-center p-14 z-20">
                <img src="/englishLogo_gray.png" alt="Logo" className="w-[224px] h-[52px]" />
            </div>
            <div className="h-screen overflow-y-auto relative z-10">
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
                <HomeSectionMain />
                <HomeSection2 sectionRef={section2Ref} isScrolled={isSection2Visible} />
                <HomeSection3 sectionRef={section3Ref} isScrolled={isSection3Visible} />
            </div>
        </div>
    );
}
