import React from 'react'
import logo from '../../images/logo.svg'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from "../Contexts/context";

const Navbar = () => {
    const {btnTextList, openSidebar, openSubMenu} = useGlobalContext();

    const displaySubMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement;
        const page = target.textContent || '';
        const tempBtn = target.getBoundingClientRect();
        const center: number = (tempBtn.left + tempBtn.right) / 2;
        const bottom: number = tempBtn.bottom - 3;
        openSubMenu(page, [center, bottom]);
    }
    return (
        <nav className='nav'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo.toString()}/>

                    <button className='btn toggle-btn' onClick={openSidebar}><FaBars/></button>
                </div>
                <ul className='nav-links'>
                    {btnTextList.map((text, index) => {
                        return (
                            <li key={index}>
                                <button className='link-btn' onMouseOver={displaySubMenu}>{text}</button>
                            </li>
                        )
                    })}
                </ul>
                <button className='btn signin-btn'>Sign in</button>
            </div>
        </nav>
    )
}

export default Navbar
