import React,{createContext, useContext, useState} from 'react';

const  StateContext = createContext();

const initialState = {
    chat: false,
    chart: false,
    userProfile: false,
    notification: false,
}
export const ContextProvider = ({childern})=>{
    const [activeMenu, setActiveMenu] = useState(true);
    return (
        <StateContext.Provider value={{
            activeMenu,
            setActiveMenu}}
        >
            {childern}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext);