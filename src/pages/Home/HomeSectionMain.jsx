import React, { useState, useEffect } from 'react';

export default function HomeSectionMain({ sectionRef }) {
    const [isMainTextVisible, setIsMainTextVisible] = useState(false);
    const [isSubTextVisible, setIsSubTextVisible] = useState(false);

    useEffect(() => {
        const mainTextTimeout = setTimeout(() => {
            setIsMainTextVisible(true);
        }, 300);

        const subTextTimeout = setTimeout(() => {
            setIsSubTextVisible(true);
        }, 1000);

        return () => {
            clearTimeout(mainTextTimeout);
            clearTimeout(subTextTimeout);
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative flex flex-col justify-center h-screen">
            <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full opacity-100 object-cover z-0">
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={`
                    relative top-[0%] left-[0%] text-center text-3xl text-white font-AritaburiSemiBold z-20 
                    transform transition-all duration-1000 ease-in-out 
                    ${isMainTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                    sm:top-[0%] sm:left-[0%] sm:text-4xl 
                    md:top-[0%] md:left-[0%] md:text-5xl 
                    lg:top-[0%] lg:left-[0%] lg:text-6xl
                `}
            >
                自然 : 스스로 존재하는 것
            </div>
            <div className={`
                    relative w-4/5 max-w-2xl mx-auto mt-5 z-20 
                    transform transition-opacity duration-1000 ease-in-out 
                    ${isSubTextVisible ? 'opacity-100' : 'opacity-0'}
                `}
            >
                <div className="
                    relative top-[0%] left-[0%] text-center leading-relaxed text-xs text-gray-300 leading-relaxed 
                    font-AritadotumMedium p-4
                    sm:text-sm sm:leading-relaxed
                    md:text-base
                    lg:text-base
                ">
                    우리 몸은 신의 피조물이자 자연의 일부로써 처음부터 건강합니다.<br />
                    자연스러움이란 곧 건강입니다.<br />
                    자연스러움을 지키는 것. 자연으로 되돌아가는 것.<br />
                    자연스러운 몸과 영혼을 만들고 자연으로부터 약을 만듭니다.<br />
                    <br />
                    우리 몸이 조금이라도 자연의 섭리에 가까워진다면,<br />
                    우리 몸은 다시 자연으로 되돌아갑니다.
                </div>
            </div>
        </section>
    );
}
