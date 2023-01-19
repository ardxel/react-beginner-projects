import React from "react";
import { FaEdit, FaTrash } from 'react-icons/fa'
import {TItemProps} from "./modules";

const Item = ({id, title, deleteItem, editItem}: TItemProps) => {
    return (
        <article key={id} className='grocery-item'>
            <p className='title'>{title}</p>
            <div className='btn-container'>
                <button type='button' className='edit-btn' onClick={() => editItem(id)}>
                    <FaEdit></FaEdit>
                </button>
                <button type='button' className='delete-btn' onClick={() => deleteItem(id)}>
                    <FaTrash></FaTrash>
                </button>
            </div>
        </article>
    )
}

export default Item;