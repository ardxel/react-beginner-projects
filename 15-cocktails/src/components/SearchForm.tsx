import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()
  return (
    <section className='section search'>
      <section className='search-form'>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
              type="text"
              name="name"
              id="name"
              onChange={(event) => setSearchTerm(event.target.value)}/>
        </div>
      </section>
    </section>
  )
}

export default SearchForm
