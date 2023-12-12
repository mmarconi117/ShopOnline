import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "../features/orderSlice";


export const store = configureStore({
    reducer: orderSlice,
    devTools: true,
})