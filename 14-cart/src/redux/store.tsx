import { configureStore } from "@reduxjs/toolkit";
import reducer from './mainSlice'
import {TypedUseSelectorHook, useSelector} from "react-redux";
const store = configureStore({
  reducer: {
    list: reducer
  }
})

type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;