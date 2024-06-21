import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const [isSectionMainVisible, setIsSectionMainVisible] = useState(false);
    
    return (
        <StateContext.Provider value={{ isSectionMainVisible, setIsSectionMainVisible }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
