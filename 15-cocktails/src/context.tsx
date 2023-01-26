import React, {useState, useContext, useEffect} from 'react'
import {useFetch} from "./hooks/useFetch";
import {GlobalContext, IDrinks} from "./types/models";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext<GlobalContext>({} as GlobalContext)



const AppProvider = ({children}: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [cocktails, setCocktails] = useState<IDrinks[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const fetchDrinks = useFetch(url, setCocktails, setLoading, searchTerm);

  useEffect(() => {
    fetchDrinks()
  }, [searchTerm, fetchDrinks])
  return (
      <AppContext.Provider value={{
        cocktails,
        loading,
        setSearchTerm}}>
    {children}
  </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}
