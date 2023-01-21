import React, { useState, useRef, useEffect } from 'react'
import {useGlobalContext} from "../Contexts/context";

const Submenu = () => {
    const [columns, setColumns] = useState<string>('col-2');
    const container = useRef(null);
    const {isSubmenuOpen, page: {page, links}, location: [x,y]} = useGlobalContext();
    useEffect(() => {
        setColumns('col-2');

        if (links.length === 3) {
            setColumns('col-3');
        }
        if (links.length > 3) {
            setColumns('col-4')
        }
    }, [page, [x,y], links])

  return (
      <aside className={`submenu ${isSubmenuOpen && 'show'}`} style={{left: x, top: y}} ref={container}>
          <h4></h4>
          <div className={`submenu-center ${columns}`}>
              {links.map((link, index) => {
                  const {url, icon, label} = link;
                  return (
                      <a key={index} href={url}>
                          {icon}
                          {label}
                      </a>
                  )
              })}
          </div>
      </aside>
  )
}

export default Submenu
