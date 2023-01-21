import React, {useState, useContext, createContext} from 'react'
import {sublinks, btnText, TSublinks} from '../../data'

type FnVoid = () => void


interface IAppContext {
    linksData: typeof sublinks,
    btnTextList: typeof btnText,
    isOpenSidebar: boolean,
    isSubmenuOpen : boolean,
    page: TSublinks,
    location: [number, number],
    openSidebar: FnVoid,
    closeSidebar: FnVoid,
    openSubMenu: (text: string, coordinates: [number, number]) => void,
    closeSubMenu: () => void
}

const AppContext = createContext<IAppContext>({} as IAppContext);

function AppProvider({children}: {children: React.ReactNode}): JSX.Element {
    const linksData = sublinks;
    const btnTextList = btnText;

    const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState<boolean>(false);
    const [page, setPage] = useState<TSublinks>({page: '', links: []})
    const [location, setLocation] = useState<[x: number, y: number]>([0,0])

    const openSidebar = () => {
        setIsOpenSidebar(true);
    }
    const closeSidebar = () => {
        setIsOpenSidebar(false);
    }
    const openSubMenu = (text: string, coordinates: [number,number]) => {
        const page = (linksData.find((link) => link.page === text) as TSublinks);
        if (!page) {
            throw Error();
        }
        setPage(page);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    }
    const closeSubMenu = () => {
        setIsSubmenuOpen(false);
    }
    return (
        <AppContext.Provider value={{
            linksData,
            btnTextList,
            isOpenSidebar,
            isSubmenuOpen,
            page,
            location,
            openSidebar,
            closeSidebar,
            openSubMenu,
            closeSubMenu}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider}

