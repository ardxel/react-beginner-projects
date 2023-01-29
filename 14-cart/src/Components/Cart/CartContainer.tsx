import React from 'react'
import CartItem from './CartItem'
import {useSelector, useDispatch} from "react-redux";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {clearList} from "../../redux/mainSlice";

const CartContainer = () => {
  const {cart, total, error, loading} = useAppSelector(state => state.list)
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

  if (error) {
    return (
        <section className='cart'>
          Error: {error}
        </section>
    )
  }
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
