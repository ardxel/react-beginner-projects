import React from "react";
import {ICart, IState} from "./Components/Context/models";

export default function reducer<T extends IState, U>(
    state: T,
    action: {type:
            'FETCH_CART' | "LOADING" | 'TOTAL' | 'CLEAR_CART' | "REMOVE_ITEM" | 'INC_ITEM' | 'DEC_ITEM',
            payload?: U[] | string}
): T  {
        switch (action.type) {
            case "LOADING":
                return {...state, loading: true};
            case 'FETCH_CART':
                return {...state, cart: action.payload, loading: false};
            case 'TOTAL':
                let amount: number = 0; let total: number = 0;
                for(let i = 0; i < state.cart.length; i++) {
                    const {price, amount: amountItem} = state.cart[i];
                    const itemTotal = +price * amountItem;

                    total += itemTotal;
                    amount += amountItem;
                }
                total = +total.toFixed(2)
                return {...state, total, amount};
            case 'CLEAR_CART':
                return {...state, cart: []}
            case 'REMOVE_ITEM':
                const newCart = state.cart.filter(item => item.id !== action.payload);
                return {...state, cart: newCart}
            case 'INC_ITEM':
                const incCart = state.cart.map(item => {
                    if (item.id === action.payload) {
                        return {...item, amount: + item.amount + 1}
                    } return item;
                }) as ICart[]
                return {...state, cart: incCart};
            case 'DEC_ITEM':
                const decCart = state.cart.map(item => {
                    if (item.id === action.payload) {
                        return {...item, amount: item.amount - 1}
                    } return item;
                }).filter(item => item.amount !== 0);
                return {...state, cart: decCart}
        default:
            throw Error(`Reducer Error: ${action.type} has no found in switch constructor.`);
    }
}



