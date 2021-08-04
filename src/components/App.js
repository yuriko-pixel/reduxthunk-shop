import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useEffect} from 'react'
import { fetchProducts } from './ProductSlice';
import Box from './Box'
import Top from './Top'
import { Provider } from 'react-redux';
import store from '../app/store'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(fetchProducts());
  },[])
  return (
    <Router>
      <Route path="/cart" component={Box}></Route>
      <Route exact path="/" component={Top}></Route>
    </Router>
  );
}

export default App;
