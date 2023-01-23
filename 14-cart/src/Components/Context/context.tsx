import React, {useContext, useReducer, useEffect} from 'react'
import {IGLobalContext, ICart, IState, IFetchCart, ReducerDispatch} from "./models";
import reducer from '../../reducer'
const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = React.createContext<IGLobalContext>({} as IGLobalContext)

const initialState: IState = {
    loading: false,
    cart: [] as ICart[],
    total: 0,
    amount: 0,
}

const AppProvider = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchCartItemsApi: IFetchCart = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        dispatch({type: "FETCH_CART", payload: data})
    }

    const clearCartList: ReducerDispatch = () => {
        dispatch({type: "CLEAR_CART"})
    }

    const remove: ReducerDispatch = (id) => {
        dispatch({type: 'REMOVE_ITEM', payload: id as keyof ICart})
    }
    const increaseItem: ReducerDispatch = (id) => {
        dispatch({type: 'INC_ITEM', payload: id})
    }
    const decreaseItem: ReducerDispatch = (id) => {
        dispatch({type: 'DEC_ITEM', payload: id})
    }
    useEffect(() => {
        fetchCartItemsApi(url);
    },[])

    useEffect(() => {
        dispatch({type: 'TOTAL'})
    }, [state.cart])

    return (
        <AppContext.Provider
            value={{
                ...state,
                clearCartList,
                remove,
                increaseItem,
                decreaseItem
            }}>
            {children}
        </AppContext.Provider>
    )
}
// make sure use
export const useGlobalContext = () => useContext(AppContext);

export {AppContext, AppProvider}
