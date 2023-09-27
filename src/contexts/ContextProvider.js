import {createContext, useContext, useState} from 'react';

const  StateContext = createContext();

const initialState = {
    chat: false,
    chart: false,
    userProfile: false,
    notification: false
};


// i used another name instead of children
export const ContextProvider = ({children})=>{
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked,setIsClicked] = useState(initialState); 
    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });
    const [screenSize,setScreenSize] = useState(undefined);
    const [currentColor,setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    return (
        <StateContext.Provider value={
            {activeMenu,setActiveMenu,isClicked,setIsClicked,handleClick,initialState,setScreenSize,screenSize}}
        >
            {children}
        </StateContext.Provider>
    );
};
export const useStateContext = () => useContext(StateContext);

