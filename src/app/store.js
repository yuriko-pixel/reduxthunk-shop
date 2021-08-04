import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../components/ProductSlice';

export default configureStore({
  reducer: {
    customCounter: rootReducer,
  },
});
