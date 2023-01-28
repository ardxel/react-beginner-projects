export interface ICart {
    amount: number,
    id: string,
    img: string,
    price: string,
    title: string
}

export interface IState {
    loading: boolean,
    cart: ICart[],
    total: number,
    amount: number,
    payload?: number
}

export type ReducerDispatch = (id?: keyof ICart) => void

export interface IGLobalContext extends IState {
    clearCartList: ReducerDispatch
    remove: ReducerDispatch
    increaseItem: ReducerDispatch
    decreaseItem: ReducerDispatch
}


export interface IFetchCart {
    (url: string): Promise<void>
}

