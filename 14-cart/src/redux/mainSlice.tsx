import { createSlice} from "@reduxjs/toolkit";
import {ICart, IState} from "../Components/Context/models";


const mainSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    loading: false,
    cart: [],
    total: 0,
    amount: 0
  } as IState,
  reducers: {
    loading(state, action) {
      return {...state, loading: true}
    },
    fetchCart(state, action) {
      return {...state, cart: action.payload, loading: false}
    },
    total(state) {
      let amount: number = 0;
      let total: number = 0;
      for (let i = 0; i < state.cart.length; i++) {
        const {price, amount: amountItem} = state.cart[i];
        const itemTotal = +price * amountItem;

        total += itemTotal;
        amount += amountItem;
      }
      total = +total.toFixed(2)
      return {...state, total, amount};
    },
    clearList(state) {
      return {...state, cart: []}
    },
    removeItem(state, action) {
      const newCart = state.cart.filter(item => item.id !== action.payload);
      return {...state, cart: newCart}
    },
    increment(state, action) {
      const incCart = state.cart.map(item => {
        if (item.id === action.payload) {
          return {...item, amount: +item.amount + 1}
        }
        return item;
      }) as ICart[]
      return {...state, cart: incCart};
    },
    decrement(state, action) {
      const decCart = state.cart.map(item => {
        if (item.id === action.payload) {
          return {...item, amount: item.amount - 1}
        }
        return item;
      }).filter(item => item.amount !== 0);
      return {...state, cart: decCart}
    }
  }
})

export const {loading, fetchCart, total, clearList, removeItem, increment, decrement} = mainSlice.actions;
const reducer = mainSlice.reducer;
export default reducer;
