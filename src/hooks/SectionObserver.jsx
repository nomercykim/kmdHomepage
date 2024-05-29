import { useEffect, useState } from 'react';

// SectionObserver 훅: 주어진 ref와 옵션을 사용하여 해당 요소가 화면에 보이는지를 감지합니다.
export const SectionObserver = (ref, options) => {
    const [isVisible, setIsVisible] = useState(false); // 요소의 가시성을 관리하는 상태 변수

    useEffect(() => {
        // Intersection Observer의 콜백 함수: 요소가 화면에 보이는지 여부를 감지합니다.
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // 요소가 화면에 보이면 상태를 true로 설정합니다.
                } else {
                    setIsVisible(false); // 요소가 화면에서 사라지면 상태를 false로 설정합니다.
                }
            });
        };

        // Intersection Observer를 생성합니다.
        const observer = new IntersectionObserver(observerCallback, options);

        // ref가 가리키는 요소를 관찰합니다.
        if (ref.current) {
            observer.observe(ref.current);
        }

        // 컴포넌트가 언마운트될 때 관찰을 중지합니다.
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]); // ref와 options가 변경될 때마다 효과를 재실행합니다.

    return isVisible; // 요소의 가시성을 반환합니다.
}
