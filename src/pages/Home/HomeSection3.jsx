import React from 'react';

export default function HomeSection3({ sectionRef, isScrolled }) {
    return (
        <section ref={sectionRef} className={`opacity-0 transition-opacity duration-1000 ease-in-out whitespace-pre-line mt-10 bg-gray-300 ${isScrolled ? 'fade-in' : ''} relative z-10 mt-0`}>
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="absolute top-40 left-40 p-4 text-white text-6xl font-SUITERegular"style={{ lineHeight: '1.4' }}>
                근골격계의<br/>단 하나의 목적, <br/> “좋은 자세로 잘 움직이는 것”
            </div>
            <div className="w-3/5 text-left text-base leading-relaxed">
                {`
                에베소서 5:29-30                
                누구든지 언제나 자기 육체를 미워하지 않고 오직 양육하여 보호하기를
                그리스도께서 교회에게 함과 같이 하나니 우리는 그 몸의 지체임이라 
                
                잠언 17:22
                마음의 즐거움은 양약이라도
                심령의 근심은 뼈를 마르게 하느니라 
                
                호세아 6:1
                오라 우리가 여호와께로 돌아가자
                여호와께서 우리를 찢으셨으나 도로 낫게 하실것이요
                우리를 치셨으나 싸매어 주실것임이라.
                
                잠언 3:1-2
                내 아들아 나의 법을 잊어버리지 말고 네 마음으로 나의 명령을 지키라
                그리하면 그것이 네가 장수하여 많은 해를 누리게하며 평강을 더하게 하리라
                `}
            </div>
        </div>
    </section>
    );
}
