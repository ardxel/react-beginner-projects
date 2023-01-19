import React from 'react'
import Item from "./Item";
import {TListProps} from "./modules";
const List = ({list, clearAll, deleteItem, editItem}: TListProps) => {

    return (
        <div className='grocery-container'>
            <div className='grocery-list'>
                {list.map((item => {
                    const {id, title} = item;
                    return (
                        <Item
                            key={id}
                            id={id}
                            title={title}
                            deleteItem={deleteItem}
                            editItem={editItem}/>
                    )
                }))}
            </div>
            <button
                className='clear-btn'
                onClick={clearAll}>clear items</button>
        </div>
    )
}

export default List
