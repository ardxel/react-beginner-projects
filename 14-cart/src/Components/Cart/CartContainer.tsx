import React from 'react'
import CartItem from './CartItem'
import {useGlobalContext} from '../Context/context'
import {useSelector, useDispatch} from "react-redux";
import {useAppSelector} from "../../redux/store";
import {clearList} from "../../redux/mainSlice";

const CartContainer = () => {
  // const { cart, total, clearCartList } = useGlobalContext()
  // const {cart, total} = useSelector((state: RootState) => [state.list.cart, state.list.total])
  const cart = useAppSelector((state) => state.list.cart);
  const total = useAppSelector((state) => state.list.total);
  const dispatch = useDispatch()
  if (cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>{total}</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={() => dispatch(clearList())}>
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
