import React from "react";

function Menu({items}) {

    return (
        <div className='items_container'>
            {items.map(item => {
                const {id, title, category, price, img, desc} = item;
                return (
                    <article key={id} className='menu_item'>
                        <div className='photo_div'>
                            <img alt={title} src={img} className='photo'/>
                        </div>
                        <div className='menu_container'>
                            <header className='header'>
                                <h4 className='menu_title'>
                                    {title}
                                </h4>
                                <p className='price'>
                                    ${price}
                                </p>
                            </header>
                            <p className='menu_desc'>
                                {desc}
                            </p>
                        </div>
                    </article>
                )
            })}
        </div>

    )

}

export default Menu;