// src/pages/Home.js
import React, { useEffect, useRef } from 'react';
import 'tailwindcss/tailwind.css';
import '../index.css';
import HomeSectionMain from './Home/HomeSectionMain';
import HomeSection2 from './Home/HomeSection2';
import HomeSection3 from './Home/HomeSection3';
import { SectionObserver } from '../hooks/SectionObserver';
import { LogoObserver } from '../hooks/LogoObserver';
import { useStateContext } from '../hooks/StateContext';
import { useWheelScroll } from '../hooks/useWheelScroll';
import { useLocation } from 'react-router-dom';

export default function Home() {
    // 각 섹션에 대한 참조 생성
    const sectionMainRef = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);

    // useWheelScroll 훅을 사용하여 스크롤 참조 배열 설정
    const { scrollRef } = useWheelScroll([sectionMainRef, section2Ref, section3Ref]);
    const { setIsSectionMainVisible } = useStateContext();

    // URL의 해시에 따라 해당 섹션으로 스크롤
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.substring(1); // 해시에서 '#' 제거
            const sectionElement = document.getElementById(sectionId);
            if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    // 메인 섹션의 가시성을 관찰
    const isSectionMainVisible = SectionObserver(sectionMainRef, {
        root: null,
        rootMargin: '0px',
        threshold: 0.01
    });
    // 두 번째 섹션의 가시성을 관찰
    const isSection2Visible = SectionObserver(section2Ref, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    });
    // 세 번째 섹션의 가시성을 관찰
    const isSection3Visible = SectionObserver(section3Ref, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    });

    // 메인 섹션의 가시성이 변경될 때 컨텍스트 상태 업데이트
    useEffect(() => {
        setIsSectionMainVisible(isSectionMainVisible);
    }, [isSectionMainVisible, setIsSectionMainVisible]);

    // 로고의 색상을 어두운 것으로 변경해야 하는지 관찰
    const isLogoDark = LogoObserver([sectionMainRef, section2Ref, section3Ref], {
        root: null,
        rootMargin: '0px',
        threshold: 0.8
    });

    return (
        <div className="h-screen overflow-hidden">
            {/* 상단 로고 (동적 색상 적용) */}
            <div className="fixed top-0 p-14 z-20 transition-colors duration-1000 ease-in-out">
                <img
                    src={isLogoDark ? "/onlyLogo_brown.png" : "/onlyLogo_gray.png"}
                    alt="Logo"
                    className="w-[51px] h-[51px]"
                />
            </div>
            {/* 하단 로고 (동적 색상 적용) */}
            <div className="fixed bottom-0 p-14 z-20 transition-colors duration-1000 ease-in-out">
                <img
                    src={isLogoDark ? "/englishLogo_brown.png" : "/englishLogo_gray.png"}
                    alt="Logo"
                    className="w-[224px] h-[52px]"
                />
            </div>
            {/* 섹션들을 담고 있는 메인 컨테이너 */}
            <div className="h-screen overflow-y-auto relative z-10">
                {/* 디밍 효과를 위한 오버레이 */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
                    <div ref={(el) => (scrollRef.current[0] = el)} id="HomeSectionMain">
                        <HomeSectionMain sectionRef={sectionMainRef} />
                    </div>
                    <div ref={(el) => (scrollRef.current[1] = el)} id="HomeSection2">
                        <HomeSection2 sectionRef={section2Ref} isScrolled={isSection2Visible} />
                    </div>
                    <div ref={(el) => (scrollRef.current[2] = el)} id="HomeSection3">
                        <HomeSection3 sectionRef={section3Ref} isScrolled={isSection3Visible} />
                    </div>
            </div>
        </div>
    );
}
