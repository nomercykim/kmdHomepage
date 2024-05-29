import React from 'react';

export default function HomeSection2({ sectionRef, isScrolled }) {
    return (
        <section ref={sectionRef} className={`opacity-0 transition-opacity duration-1000 ease-in-out whitespace-pre-line mt-10 bg-gray-100 ${isScrolled ? 'fade-in' : ''} relative z-10 mt-0`}>
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-4/5 text-center text-base leading-relaxed">
                {`
                자연스러움을 잃으면 아픕니다.

                자세와 움직임이 무너지면 4가지 자연스러운 순환이 무너집니다. 10가지 생명시스템이 무너집니다. .
                우리 몸이 밸런스를 잡지 못하면 건강을 유지하고 되돌아갈 힘을 잃습니다. 
                우리의 영혼 또한 아프게 됩니다. 
                
                우리 몸은 늘 자연으로 돌아갈 준비가 되어 있습니다. 
                
                조금만 자세를 바르게, 조금만 잘 움직일 수 있도록 도와주면
                우리 몸의 순환을 조금만 도와준다면
                우리 몸이 스스로 밸런스를 잡도록 조금만 도와준다면
                우리의 영혼을 조금만 돌보아 준다면
                
                우리 몸이 조금이라도 자연의 섭리에 가까워 진다면 우리 몸은 다시 자연으로 돌아갑니다.
                `}
            </div>
        </div>
    </section>
    );
}

