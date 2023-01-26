import React from 'react'
import {Link} from 'react-router-dom'
import {IDrinks} from "../types/models";

const Cocktail = ({id, name, image, info, glass}: IDrinks) => {
  return (
      <article className='cocktail'>
        <div className='img_container'>
          <img src={image} alt={name}/>
        </div>
        <div className='cocktail-footer'>
          <h1>{name}</h1>
          <h4>{glass}</h4>
          <p>{info}</p>
          <Link to={`/coctail/${id}`} className='btn btn-primary btn-details'>
            Details
          </Link>
        </div>
      </article>
  )
}

export default Cocktail
