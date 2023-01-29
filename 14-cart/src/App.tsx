import React, {useEffect} from 'react'

// components
import Navbar from './Components/Navbar/Navbar'
import CartContainer from './Components/Cart/CartContainer'
import {useAppDispatch, useAppSelector} from "./redux/store";
// items
import {total, fetchCartItems} from "./redux/mainSlice";
const url = new URL('https://course-api.com/react-useReducer-cart-project');

function App() {
  const loading = useAppSelector((state) => state.list.loading)
  const cart = useAppSelector((state) => state.list.cart);
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCartItems(url))
  }, [])

  useEffect(() => {
    dispatch(total());
  }, [cart])

  if (loading) {
    return (
        <div className='loading'>
          <h1>Loading...</h1>
        </div>
    )
  }
  return (
      <main>
        <Navbar/>
        <CartContainer/>
      </main>
  )
}

export default App
