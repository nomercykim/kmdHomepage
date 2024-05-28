import React, { useEffect, useRef, useState } from 'react';
import 'tailwindcss/tailwind.css';
import '../index.css';

export default function Home() {
    const sectionRef = useRef(null); // 특정 DOM 요소에 접근하기 위해 useRef 훅을 사용합니다.
    const [isScrolled, setIsScrolled] = useState(false); // 스크롤 상태를 관리하기 위한 useState 훅을 사용합니다.

    useEffect(() => {
        console.log('Component mounted'); // 컴포넌트가 마운트 되었음을 확인

        // 스크롤 이벤트 핸들러 함수
        const handleScroll = () => {
            console.log('Scroll event detected'); // 스크롤 이벤트가 감지되었음을 확인

            if (sectionRef.current) {
                const topPosition = sectionRef.current.getBoundingClientRect().top; // 요소의 상단 위치를 얻습니다.
                const screenPosition = window.innerHeight / 1.5; // 화면의 중앙 위치를 계산합니다.

                console.log("topPosition:", topPosition);
                console.log("screenPosition:", screenPosition);

                // 요소의 상단이 화면 중앙보다 위에 있을 경우
                if (topPosition < screenPosition) {
                    setIsScrolled(true); // 스크롤 상태를 true로 설정합니다.
                } else {
                    setIsScrolled(false); // 스크롤 상태를 false로 설정합니다.
                }
            } else {
                console.log('sectionRef.current is null'); // sectionRef.current가 null인 경우를 확인
            }
        };

        window.addEventListener('scroll', handleScroll); // 스크롤 이벤트 리스너를 추가합니다.
        console.log('Scroll event listener added'); // 스크롤 이벤트 리스너가 추가되었음을 확인

        // 컴포넌트가 언마운트될 때 스크롤 이벤트 리스너를 제거합니다.
        return () => {
            console.log('Component unmounted'); // 컴포넌트가 언마운트 되었음을 확인
            window.removeEventListener('scroll', handleScroll);
            console.log('Scroll event listener removed'); // 스크롤 이벤트 리스너가 제거되었음을 확인
        };
    }, []); // 빈 배열을 두 번째 인자로 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 합니다.

    // isScrolled 상태 변화 확인용 useEffect
    useEffect(() => {
        console.log("isScrolled state:", isScrolled);
    }, [isScrolled]);

    // sectionRef가 무엇을 가리키는지 확인
    useEffect(() => {
        console.log('sectionRef.current:', sectionRef.current);
    }, []);

    return (
        <div className="h-screen overflow-hidden">
            {/* 로고를 추가하는 부분 */}
            <div className="fixed top-0 w-full flex justify-between items-center p-14 z-20">
                <img src="/onlyLogo_gray.png" alt="Logo" className="w-[51px] h-[51px]" />
            </div>
            <div className="fixed bottom-0 w-full flex justify-between items-center p-14 z-20">
                <img src="/englishLogo_gray.png" alt="Logo" className="w-[224px] h-[52px]" />
            </div>

            {/* section 1 */}
            <div className="h-screen overflow-y-auto relative z-10">
                <section className="relative flex flex-col items-center justify-center h-screen bg-gray-200 ">
                    {/* 비디오를 배경으로 사용 */}
                    <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full opacity-100 object-cover z-0">
                        <source src="/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>                  
                    <div className="relative text-center text-6xl text-white font-AritaburiSemiBold z-20">
                        自然 : 스스로 존재하는 것
                    </div>
                    <div className="relative w-4/5 max-w-2xl mx-auto mt-5 z-20">
                        <div className="relative text-center text-lg text-gray-200 leading-relaxed font-AritadotumMedium p-4">
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
                <section ref={sectionRef} className={`opacity-0 transition-opacity duration-1000 ease-in-out whitespace-pre-line mt-10 bg-gray-100 ${isScrolled ? 'fade-in' : ''} relative z-10`}>
                    <div className="flex flex-col items-center justify-center h-screen">
                        <div className="w-4/5 text-center text-base leading-relaxed">
                            {`
                            근골격계의 단 하나의 목적 “좋은 자세로 잘 움직이는 것”

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
                            
                            건강철학 
                            
                            에베소서 5:29-30
                            
                            누구든지 언제나 자기 육체를 미워하지 않고 오직 양육하여 보호하기를 그리스도께서 교회에게 함과 같이 하나니 우리는 그 몸의 지체임이라 
                            
                            잠언 17:22
                            마음의 즐거움은 양약이라도 심령의 근심은 뼈를 마르게 하느니라 
                            
                            호세아 6:1
                            오라 우리가 여호와께로 돌아가자 여호와께서 우리를 찢으셨으나 도로 낫게 하실것이요 우리를 치셨으나 싸매어 주실것임이라.
                            
                            잠언 3:1-2
                            내 아들아 나의 법을 잊어버리지 말고 네 마음으로 나의 명령을 지키라 그리하면 그것이 네가 장수하여 많은 해를 누리게하며 평강을 더하게 하리라
                            `}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
