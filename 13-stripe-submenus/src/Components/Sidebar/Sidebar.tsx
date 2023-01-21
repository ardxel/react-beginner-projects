import React from 'react'
import { FaTimes } from 'react-icons/fa'
import ArticleLink from "./ArticleLink";
import {useGlobalContext} from "../Contexts/context";

const Sidebar = () => {
    const {linksData, isOpenSidebar, closeSidebar} = useGlobalContext();

  return (
      <div className={`sidebar-wrapper ${isOpenSidebar && 'show'}`}>
        <aside className='sidebar'>
            <button className='close-btn' onClick={closeSidebar}><FaTimes/></button>
            <div className='sidebar-links'>
                {linksData.map((sublink) => {
                    return (
                        <ArticleLink key={sublink.page} sublink={sublink}/>
                    )
                })}
            </div>
        </aside>
      </div>
  )
}

export default Sidebar
