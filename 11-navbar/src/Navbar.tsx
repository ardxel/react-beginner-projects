import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import {links, social} from './data'
import logo from './logo.svg'
const Navbar = () => {
    const [listOfLinks, setListOfLinks] = useState(links);
    const [listOfSocialIcons, setListOfSocialIcons] = useState(social);
    const [showListOfLinks, setShowListOfLinks] = useState<boolean>(false);
    const linkContainerRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLUListElement>(null);
    useEffect(() => {
        if (showListOfLinks) {
            const height = linksRef!.current!.getBoundingClientRect().height;
            linkContainerRef!.current!.style.height = height+'px';
        } else {
            linkContainerRef!.current!.style.height = '0px';
        }
    }, [showListOfLinks])
  return (
      <div className='nav-center'>
          <div className='nav-header'>
             <img alt='logo' src={String(logo)}/>
             <button className='nav-toggle' onClick={() => setShowListOfLinks(!showListOfLinks)}>
                 <FaBars/>
             </button>
          </div>
          <div className='links-container' ref={linkContainerRef}>
              <ul className='links' ref={linksRef}>
                  {listOfLinks.map(link => {
                      const {id, url, text} = link;
                      return (
                          <li key={id}>
                                <a href={url} >
                                    {text}
                                </a>
                          </li>)})}
              </ul>
          </div>
          <ul className='social-icons'>
              {listOfSocialIcons.map(socialIcon => {
                  const {id, url, icon} = socialIcon;
                  return (
                      <li key={id}>
                          <a href={url}>
                              {icon}
                          </a>
                      </li>)})}
          </ul>
      </div>
  )
}

export default Navbar
