import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

// export const fetchProducts = createAsyncThunk(
//     "api/fetchProducts",
//     () =>
//       fetch('https://fakestoreapi.com/products')
//         .then((response) => response.json())
//         .then(result => {return result})
//         .catch((error) => {return error})
//   );

  export const fetchProducts = createAsyncThunk(
    "cart/cartItemLoading",
    () =>
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then((response) => {return response})
        .catch((error) => error)
  );
  
  const initialState = {
        status: "idle",
        products: {},
        cart: {},
        error: {},
    };
    
    const ProductSlice = createSlice({
      name: "cart",
      initialState,
      reducers: {},
      extraReducers: (builder) => {
          builder.addCase(fetchProducts.fulfilled, (state, action) => {
              state.status = 'fulfilled';
              state.products = action.payload;
          })
      }
    });

export const {incrementCart,decrementCart} = ProductSlice.actions;

export const selectProducts = (state)=> state.products;
export const selectCart = (state) => state.cart;
export default ProductSlice.reducer
