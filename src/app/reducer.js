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
        cart: [],
        cartItem: 0,
        error: {},
    };
    
    const ProductSlice = createSlice({
      name: "cart",
      initialState,
      reducers: {
        incrementCart: (state,action) => {
          state.cartItem++;
          const item = state.cart.find(i=>i.id === action.payload)
          if(item === undefined) {
            const item2 = state.products.find(i => i.id === action.payload);
            item2.count = 1;
            state.cart.push(item2);
          } else {
            item.count += 1;
          }
        },
        decrementCart: (state, action) => {
          const item = state.cart.find(i=>i.id === action.payload);
          if(item.count < 1) {
            item.count -= 1;
          } else if (item.count === 1) {
            const index = state.cart.findIndex(i => i.id === action.payload);
            state.cart.splice(index,1);
          }
          state.cartItem--;
        },
        deleteFromCart: (state, action) => {
          const index = state.cart.findIndex(i => i.id === action.payload);
          if(index === -1) return;
          state.cart.splice(index,1);
          state.cartItem--;
        }
      },
      extraReducers: (builder) => {
          builder.addCase(fetchProducts.fulfilled, (state, action) => {
              state.status = 'fulfilled';
              state.products = action.payload;
          })
      }
    });

export const {incrementCart,decrementCart, deleteFromCart} = ProductSlice.actions;

export const selectProducts = (state)=> state.products;
export const selectCart = (state) => state.cart;
export default ProductSlice.reducer
