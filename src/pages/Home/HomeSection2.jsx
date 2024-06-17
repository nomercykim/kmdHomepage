import React from 'react';

export default function HomeSection2({ sectionRef, isScrolled }) {

    return (
        <section 
            ref={sectionRef} className={`
                opacity-0
                transition-opacity
                duration-1000 ease-in-out 
                whitespace-pre-line 
                bg-gray-300 ${isScrolled ? 'fade-in' : ''} 
                relative z-10`}
        >
            <div className="h-screen">
                <div className="
                    absolute
                    top-[20%] left-[10%]
                    text-2xl text-white 
                    sm:top-[20%] sm:left-[10%] sm:text-3xl 
                    md:top-[20%] md:left-[13%] md:text-4xl 
                    lg:top-[20%] lg:left-[15%] lg:text-6xl
                    font-SUITERegular" style={{ lineHeight: '1.4' }}
                >
                        자연스러움을<br/> 잃으면<br/> 아픕니다.
                </div>
                <div className="pl-144">
                    <div className=" 
                        absolute
                        top-[33%] left-[10%]
                        text-xs leading-relaxed
                        sm:top-[36%] sm:left-[10%] sm:text-xs
                        md:top-[22%] md:left-[40%] md:text-sm 
                        lg:top-[23%] lg:left-[45%] lg:text-base
                        " style={{ lineHeight: '1.8' }}
                    >
                        {`자세와 움직임이 무너지면,
                        우리 몸이 밸런스를 잡지 못하면
                        4가지 자연스러운 순환이 무너집니다.
                        10가지 생명시스템이 무너집니다.
                        건강을 유지하고 되돌아갈 힘을 잃습니다. 
                        우리의 영혼 또한 아프게 됩니다.
        
                        `}
                    </div>
                    <div className="
                        absolute
                        top-[48%] left-[10%]
                        text-xl text-white leading-relaxed
                        sm:top-[52%] sm:left-[10%] sm:text-xl
                        md:top-[40%] md:left-[40%] md:text-xl 
                        lg:top-[45%] lg:left-[45%] lg:text-2xl
                        font-SUITERegular"
                    >
                        {`아주 조금만`}
                    </div>
                    <div className="
                        absolute
                        top-[51%] left-[10%]
                        text-xs leading-relaxed
                        sm:top-[56%] sm:left-[10%] sm:text-xs
                        md:top-[43%] md:left-[40%] md:text-sm
                        lg:top-[49%] lg:left-[45%] lg:text-base
                        " style={{ lineHeight: '1.8' }}
                    >
                        {`
                        우리 몸의 자세를 바르게 움직일 수 있도록 도와주면,
                        우리 몸이 스스로 균형을 잡도록 도와준다면,
                        우리 몸의 순환을 도와준다면,                    
                        우리 몸의 영혼을 돌보아 준다면,
                        우리 몸이 자연의 섭리에 가까워 진다면,
                        `}
                    </div>
                    <div className="
                        absolute
                        top-[63%] left-[10%]
                        text-xl text-white leading-relaxed 
                        sm:top-[68%] sm:left-[10%] sm:text-xl
                        md:top-[57%] md:left-[40%] md:text-xl
                        lg:top-[63%] lg:left-[45%] lg:text-2xl
                        font-SUITERegular" style={{ lineHeight: '1.8' }}
                    >
                        {`
                        우리의 몸은 다시 자연으로 돌아갑니다.
                        우리의 몸은 늘 자연으로 돌아갈 준비가 
                        되어 있습니다.`}
                    </div>
                </div>
            </div>
        </section>
    );
}