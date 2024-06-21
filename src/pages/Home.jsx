import React, { useRef, useEffect } from 'react'; 
import 'tailwindcss/tailwind.css'; 
import '../index.css'; 
import HomeSectionMain from './Home/HomeSectionMain'; 
import HomeSection2 from './Home/HomeSection2'; 
import HomeSection3 from './Home/HomeSection3'; 
import { SectionObserver } from '../hooks/SectionObserver'; 
import { LogoObserver } from '../hooks/LogoObserver'; 
import { useStateContext } from '../hooks/StateContext';
import Navbar from '../components/Navbar';


export default function Home() {
    const sectionMainRef = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const { setIsSectionMainVisible } = useStateContext(); // context에서 상태를 가져옵니다.

    const isSectionMainVisible = SectionObserver(sectionMainRef, {
        root: null,
        rootMargin: '0px',
        threshold: 0.01
    });

    useEffect(() => {
        setIsSectionMainVisible(isSectionMainVisible);
    }, [isSectionMainVisible, setIsSectionMainVisible]);

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

    const isLogoDark = LogoObserver([sectionMainRef, section2Ref, section3Ref], {
        root: null,
        rootMargin: '0px',
        threshold: 0.8
    });

    return (
        <div className="h-screen overflow-hidden">
            <div className="fixed top-0 p-14 z-20 transition-colors duration-1000 ease-in-out">
                <img
                    src={isLogoDark ? "/onlyLogo_brown.png" : "/onlyLogo_gray.png"}
                    alt="Logo"
                    className="w-[51px] h-[51px]"
                />
            </div>
            <div className="fixed bottom-0 p-14 z-20 transition-colors duration-1000 ease-in-out">
                <img
                    src={isLogoDark ? "/englishLogo_brown.png" : "/englishLogo_gray.png"}
                    alt="Logo"
                    className="w-[224px] h-[52px]"
                />
            </div>
            <Navbar isHomeSectionMainVisible={isSectionMainVisible} />
            <div className="h-screen overflow-y-auto relative z-10">
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
                <HomeSectionMain sectionRef={sectionMainRef} />
                <HomeSection2 sectionRef={section2Ref} isScrolled={isSection2Visible} />
                <HomeSection3 sectionRef={section3Ref} isScrolled={isSection3Visible} />
            </div>
        </div>
    );
}
