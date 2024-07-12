import { useRef, useEffect, useState } from 'react';

export const useWheelScroll = (sectionRefs) => {

    const scrollRef = useRef([]); // scrollRef는 각 섹션 요소에 대한 참조 배열을 저장    
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0); // 현재 섹션의 인덱스를 추적하는 상태
    const [isScrolling, setIsScrolling] = useState(false); // 스크롤 이벤트의 빈도를 제어하는 상태


    // 특정 섹션으로 부드럽게 스크롤하는 함수
    const handleScrollView = (index) => {
        // 인덱스에 해당하는 섹션이 존재할 경우 그 섹션으로 부드럽게 스크롤
        if (scrollRef.current[index]) {
            scrollRef.current[index].scrollIntoView({ behavior: "smooth" });
            setCurrentSectionIndex(index); // 현재 섹션 인덱스 업데이트
        }
    };


    // 휠 스크롤 이벤트를 처리하여 섹션을 이동하는 함수
    const handleWheelScroll = (event) => {
        // 스크롤 중이라면 추가 스크롤 이벤트 무시
        if (isScrolling) return;

        // 1초 동안 추가 스크롤 이벤트 방지
        setIsScrolling(true);
        setTimeout(() => setIsScrolling(false), 1500);

        //event.deltaY는 휠을 굴릴 때 발생하는 이벤트 객체의 속성으로, 수직 방향의 스크롤 양을 나타냄.
        //이 값은 일반적으로 사용자가 휠을 아래로 굴리면 양수가 되고, 위로 굴리면 음수가 됨.
        if (event.deltaY > 0) {
            // 아래로 스크롤
            if (currentSectionIndex < scrollRef.current.length - 1) { //현재 보이는 섹션이 마지막 섹션이 아닐 때 
                //scrollRef.current.length - 1은 섹션 참조 배열 scrollRef.current의 길이에서 1을 뺀 값. 마지막 섹션의 인덱스를 의미
                console.log('----------------------------Moving to next section------------------');
                handleScrollView(currentSectionIndex + 1); // 다음 섹션으로 이동
            }
        } else {
            // 위로 스크롤
            if (currentSectionIndex > 0) {
                console.log('----------------------------Moving to previous section--------------------');
                handleScrollView(currentSectionIndex - 1); // 이전 섹션으로 이동
            }
        }
    };

    // 컴포넌트가 마운트될 때 휠 이벤트 리스너 추가, 언마운트될 때 제거
    useEffect(() => {
        console.log('Adding wheel event listener');
        window.addEventListener('wheel', handleWheelScroll);
        return () => {
            console.log('Removing wheel event listener');
            window.removeEventListener('wheel', handleWheelScroll);
        };
    }, [currentSectionIndex, isScrolling]); // currentSectionIndex와 isScrolling이 변경될 때마다 이펙트 실행

    // 섹션 참조 배열과 스크롤 참조 배열을 반환
    return { sectionRefs, scrollRef };
};
