export interface IDrinks {
  id?: number,
  name: string,
  image: string,
  info: string,
  glass: string
}

export interface SingleDrink extends IDrinks {
  category: string,
  ingredients: Array<string | null>
  instructions: string,
}

export interface GlobalContext {
  cocktails: IDrinks[],
  loading: boolean,
  setSearchTerm: (text: string) => void
}