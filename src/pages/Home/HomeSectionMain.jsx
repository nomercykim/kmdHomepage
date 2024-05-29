import React, { useState, useEffect } from 'react';

export default function HomeSectionMain() {
    const [isMainTextVisible, setIsMainTextVisible] = useState(false);
    const [isSubTextVisible, setIsSubTextVisible] = useState(false);

    useEffect(() => {
        const mainTextTimeout = setTimeout(() => {
            setIsMainTextVisible(true);
        }, 300); // 0.5초 후 메인 텍스트가 나타나기 시작

        const subTextTimeout = setTimeout(() => {
            setIsSubTextVisible(true);
        }, 1000); // 메인 텍스트 애니메이션 이후 서브 텍스트가 나타나기 시작

        return () => {
            clearTimeout(mainTextTimeout);
            clearTimeout(subTextTimeout);
        };
    }, []);

    return (
        <section className="relative flex flex-col items-center justify-center h-screen bg-gray-200">
            {/* 비디오를 배경으로 사용 */}
            <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full opacity-100 object-cover z-0">
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>                  
            <div
                className={`relative text-center text-6xl text-white font-AritaburiSemiBold z-20 transform transition-all duration-1000 ease-in-out ${
                    isMainTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
                自然 : 스스로 존재하는 것
            </div>
            <div
                className={`relative w-4/5 max-w-2xl mx-auto mt-5 z-20 transform transition-opacity duration-1000 ease-in-out ${
                    isSubTextVisible ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <div className="relative text-center text-lg text-gray-300 leading-relaxed font-AritadotumMedium p-4">
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
