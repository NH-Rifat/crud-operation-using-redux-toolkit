import { configureStore } from "@reduxjs/toolkit"
import ProductReducer from "./features/Books/ProductSlice"

const store = configureStore({
  reducer:{
    productsReducer:ProductReducer,
  }
})

export default store;