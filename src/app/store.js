import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from './reducer';

export const store = configureStore({
  reducer: ProductReducer
})
