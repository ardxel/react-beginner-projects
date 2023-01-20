import React, { useState, createContext, useContext } from 'react'

interface IGlobalContext {
    showSideBar?: boolean,
    showModal?: boolean,
    openModal?: () => void,
    closeModal?: () => void,
    openSidebar?: ()=> void,
    closeSidebar?: () => void
}

const AppContext = createContext<IGlobalContext>({});

function AppProvider({children}: {children?: any}) {
    const [showSideBar, setShowSideBar] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }

    const openSidebar = () => {
        setShowSideBar(true);
    }

    const closeSidebar = () => {
        setShowSideBar(false);
    }

    return (
        <AppContext.Provider
            value={{
                showSideBar,
                showModal,
                openModal,
                closeModal,
                openSidebar,
                closeSidebar}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}
