import { useEffect, useState } from 'react';

// LogoObserver 훅: 주어진 refs와 옵션을 사용하여 해당 요소가 화면 특정 지점에 도달했는지 감지합니다.
export const LogoObserver = (refs, options) => {
    const [isSection2Visible, setIsSection2Visible] = useState(false); // section2의 가시성 상태를 관리하는 변수
    const [isSection3Visible, setIsSection3Visible] = useState(false); // section3의 가시성 상태를 관리하는 변수
    const [isLogoDark, setIsLogoDark] = useState(false); // 로고 상태를 관리하는 변수

    useEffect(() => {
        // Intersection Observer의 콜백 함수: 요소가 화면 특정 지점에 도달했는지 여부를 감지합니다.
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                const isIntersecting = entry.isIntersecting;

                if (entry.target === refs[1].current) {
                    setIsSection2Visible(isIntersecting);
                }
                if (entry.target === refs[2].current) {
                    setIsSection3Visible(isIntersecting);
                }
            });
        };

        // Intersection Observer를 생성합니다.
        const observer = new IntersectionObserver(observerCallback, options);

        // 각 ref가 가리키는 요소를 관찰합니다.
        refs.forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        // 컴포넌트가 언마운트될 때 관찰을 중지합니다.
        return () => {
            refs.forEach(ref => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, [refs, options]); // refs와 options가 변경될 때마다 효과를 재실행합니다.
    
    useEffect(() => {
        if (isSection3Visible) {
            setIsLogoDark(true);
        } else if (isSection2Visible) {
            setIsLogoDark(true); // section2가 보일 때 로고를 갈색으로 설정
        } else {
            setIsLogoDark(false); // section2와 section3 모두 보이지 않을 때 로고를 회색으로 설정
        }
    }, [isSection2Visible, isSection3Visible]);


    return isLogoDark; // 로고의 상태를 반환합니다.
};
