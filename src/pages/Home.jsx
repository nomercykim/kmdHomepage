import React, { useRef } from 'react'; // React와 관련 훅을 가져옵니다.
import 'tailwindcss/tailwind.css'; // Tailwind CSS를 가져옵니다.
import '../index.css'; // 사용자 정의 CSS를 가져옵니다.
import HomeSectionMain from './Home/HomeSectionMain'; // HomeSectionMain 컴포넌트를 가져옵니다.
import HomeSection2 from './Home/HomeSection2'; // HomeSection2 컴포넌트를 가져옵니다.
import HomeSection3 from './Home/HomeSection3'; // HomeSection3 컴포넌트를 가져옵니다.
import { SectionObserver } from '../hooks/SectionObserver'; // SectionObserver 훅을 가져옵니다.
import { LogoObserver } from '../hooks/LogoObserver';

export default function Home() {
    const sectionHomeRef = useRef(null);
    const section2Ref = useRef(null); // section2의 ref를 생성합니다.
    const section3Ref = useRef(null); // section3의 ref를 생성합니다.

    const isSection2Visible = SectionObserver(section2Ref, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    }); // section2가 화면에 50% 이상 보일 때 상태를 업데이트하는 SectionObserver 훅을 사용합니다.

    const isSection3Visible = SectionObserver(section3Ref, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    }); // section3가 화면에 50% 이상 보일 때 상태를 업데이트하는 SectionObserver 훅을 사용합니다.

    const isLogoDark = LogoObserver([sectionHomeRef, section2Ref, section3Ref], {
        root: null,
        rootMargin: '0px',
        threshold: 0.8
    }); // 새로운 LogoObserver 훅을 사용하여 로고의 색상 변화를 감지합니다.

    return (
        <div className="h-screen overflow-hidden">
            {/* 고정된 상단 로고 */}
            <div className="fixed top-0 w-full p-14 z-20 transition-colors duration-1000 ease-in-out">
                <img
                    src={isLogoDark ? "/onlyLogo_brown.png" : "/onlyLogo_gray.png"} // 로고의 가시성 상태에 따라 이미지를 변경합니다.
                    alt="Logo"
                    className="w-[51px] h-[51px]"
                />
            </div>
            {/* 고정된 하단 로고 */}
            <div className="fixed bottom-0 w-full p-14 z-20 transition-colors duration-1000 ease-in-out">
                <img
                    src={isLogoDark ? "/englishLogo_brown.png" : "/englishLogo_gray.png"} // 로고의 가시성 상태에 따라 이미지를 변경합니다.
                    alt="Logo"
                    className="w-[224px] h-[52px]"
                />
            </div>
            <div className="h-screen overflow-y-auto relative z-10">
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
                <HomeSectionMain sectionRef={sectionHomeRef} />
                <HomeSection2 sectionRef={section2Ref} isScrolled={isSection2Visible} />
                <HomeSection3 sectionRef={section3Ref} isScrolled={isSection3Visible} />
            </div>
        </div>
    );
}
