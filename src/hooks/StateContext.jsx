import React, { createContext, useContext, useState } from 'react';

// StateContext를 생성하여 전역 상태 관리
const StateContext = createContext();

// StateProvider 컴포넌트는 하위 컴포넌트들에게 상태를 제공
export const StateProvider = ({ children }) => {
    // isSectionMainVisible 상태를 정의하고 초기값을 false로 설정
    const [isSectionMainVisible, setIsSectionMainVisible] = useState(false);
    
    return (
        // Provider를 통해 하위 컴포넌트들에게 상태와 상태 업데이트 함수를 전달
        <StateContext.Provider value={{ isSectionMainVisible, setIsSectionMainVisible }}>
            {children}
        </StateContext.Provider>
    );
};

// useStateContext 훅을 통해 StateContext를 편리하게 사용할 수 있도록 함
export const useStateContext = () => useContext(StateContext);
