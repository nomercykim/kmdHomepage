import React, { useRef } from 'react';

export default function useMoveScroll() {
    
    const element = useRef<HTMLDivElement>(null);

    const onMoveToElement = () =>{
        element.current?.scrollIntoView({behavior: 'smooth', block:'start'});
    };

    return {element, onMoveToElement};
}

