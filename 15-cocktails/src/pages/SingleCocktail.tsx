import React, {useEffect, useState} from 'react'
import Loading from '../components/Loading'
import {useParams, Link} from 'react-router-dom'
import {SingleDrink} from "../types/models";
import Error from "./Error";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const {id} = useParams();
  const [drink, setDrink] = useState<SingleDrink>()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)

    async function getCocktail() {
      try {
        const response = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        )
        const data = await response.json()
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          }
          console.log(newCocktail)
          setDrink(newCocktail)
        } else {
          setDrink({} as SingleDrink)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getCocktail()
  }, [id])

  if (loading) {
    return <Loading/>
  }
  if (!drink) {
    return <Error/>
  } else {
    const {name, image, category, info, glass, instructions, ingredients} = drink;
    return (
        <section className='section cocktail-section'>
          <Link to='/' className='btn btn-primary'>Back home</Link>
          <h2 className='section-title'>{name}</h2>
          <div className='drink'>
            <img src={image} alt={name}/>
            <div className='drink-info'>
              <p><span className='drink-data'>name: </span>{name}</p>
              <p><span className='drink-data'>category: </span>{glass}</p>
              <p><span className='drink-data'>info: </span>{info}</p>
              <p><span className='drink-data'>glass: </span>{glass}</p>
              <p><span className='drink-data'>instructions: </span>{instructions}</p>
              <p><span className='drink-data'>ingredients: </span>{ingredients.join('  ')}</p>

            </div>
          </div>
        </section>
    )
  }
}

export default SingleCocktail
