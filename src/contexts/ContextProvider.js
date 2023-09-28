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
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (e) =>{
        setCurrentMode(e.targer.value);
        localStorage.setItem('themeMode',e.target.value);
    }

    const setColor = (e) => {
        setCurrentColor(e.target.value);
        localStorage.setItem('themeMode',e.target.value);
    }
    return (
        <StateContext.Provider value={
            {activeMenu,setActiveMenu,
                isClicked,setIsClicked,
                handleClick,initialState,
                setScreenSize,screenSize,
                setCurrentMode, setMode,
                setCurrentColor,setColor,
                themeSettings,setThemeSettings
            }}
        >
            {children}
        </StateContext.Provider>
    );
};
export const useStateContext = () => useContext(StateContext);

