import { useEffect, useState } from 'react';

// LogoObserver 훅: 주어진 refs와 옵션을 사용하여 해당 요소가 화면 특정 지점에 도달했는지 감지합니다.
export const LogoObserver = (refs, options) => {
    const [isLogoDark, setIsLogoDark] = useState(false); // 로고 상태를 관리하는 변수

    useEffect(() => {
        // Intersection Observer의 콜백 함수: 요소가 화면 특정 지점에 도달했는지 여부를 감지합니다.
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                const top = entry.boundingClientRect.top;
                const height = window.innerHeight;
                const thresholdTop = height * 0.2;
                const thresholdBottom = height * 0.5;

                if (entry.target === refs[0].current) {
                    if (top < thresholdTop && top > 0) {
                        setIsLogoDark(true); // section2가 화면 상단 1/5 지점에 도달했을 때 로고를 갈색으로 설정합니다.
                    } else if (top > thresholdBottom) {
                        setIsLogoDark(false); // section2가 화면의 중앙 지점에서 homesection으로 돌아갈 때 로고를 회색으로 설정합니다.
                    }
                }

                if (entry.target === refs[1].current && top < thresholdTop && top > 0) {
                    setIsLogoDark(true); // section3가 화면 상단 1/5 지점에 도달했을 때 로고를 갈색으로 유지합니다.
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

    return isLogoDark; // 로고의 상태를 반환합니다.
};
