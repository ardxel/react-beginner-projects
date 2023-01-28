import React, {useEffect} from 'react'
import {useGlobalContext} from './Components/Context/context'

// components
import Navbar from './Components/Navbar/Navbar'
import CartContainer from './Components/Cart/CartContainer'
import {useDispatch} from "react-redux";
import { useAppSelector} from "./redux/store";
import {IFetchCart} from "./Components/Context/models";

// items
import {fetchCart, total} from "./redux/mainSlice";
const url = 'https://course-api.com/react-useReducer-cart-project'

function App() {
  // const {loading} = useGlobalContext();
  const loading = useAppSelector((state) => state.list.loading)
  const cart = useAppSelector((state) => state.list.cart);
  const dispatch = useDispatch();

  const fetchCartItemsApi: IFetchCart = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    dispatch(fetchCart(data))
  }

  useEffect(() => {
    fetchCartItemsApi(url)
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
