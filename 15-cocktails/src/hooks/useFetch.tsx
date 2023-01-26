import {useCallback} from "react";
import {IDrinks} from "../types/models";

function useFetch <T>(
    url: string,
    cb: (arg: T) => void,
    cbLoading: (arg: boolean) => void,
    search?: string) {

  return useCallback(async () => {
    cbLoading(true);
    const response = await fetch(`${url}${search}`);
    const data = await response.json();
    const {drinks} = data;
    if (drinks) {
      const coctails = drinks.map((drink) => {
        const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = drink;
        return {
          id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass
        }
      })
      cb(coctails);
      cbLoading(false);
    } else {
      cb([] as T);
      cbLoading(false);
    }
    console.log(drinks);
  }, [search])
}

export {useFetch}