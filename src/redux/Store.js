import { configureStore } from "@reduxjs/toolkit";
import  cartSlice  from "./slices/cartSlice";


export const Store = configureStore({
    reducer:{
        cart:cartSlice
    }
}); 