import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ICart, IState} from "../models";

export const fetchCartItems = createAsyncThunk(
    'cartSlice/fetchCartItems',
    async (url: URL, {rejectWithValue}) => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Server Error');
        } else {
          const data = await response.json();
          return data;
        }

      } catch(e) {
        let errorMessage = 'Server error';
        if (e instanceof Error) {
          errorMessage = e.message;
        }
        console.log(errorMessage);
        rejectWithValue(errorMessage);
      }

    }
)

const mainSlice = createSlice({
      name: 'cartSlice',
      initialState: {
        loading: false,
        cart: [],
        total: 0,
        amount: 0,
        error: null,
      } as IState,
      reducers: {
        loading(state) {
          return {...state, loading: true}
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
      },
      extraReducers: (builder) => {
        builder
            .addCase(fetchCartItems.pending, (state, action) => {
              state.loading = true;
              state.error = null;
            })
            .addCase(fetchCartItems.fulfilled, (state, {payload}) => {
              state.cart = payload as ICart[];
              state.loading = false;
            })
            .addCase(fetchCartItems.rejected, (state, {payload}) => {
              state.loading = false;
              state.error = payload as string;
            })
      }
    }
)

export const {loading, total, clearList, removeItem, increment, decrement} = mainSlice.actions;
const reducer = mainSlice.reducer;
export default reducer;
