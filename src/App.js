import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import {useEffect} from 'react'
import { fetchProducts } from './app/reducer';
import Box from './components/Box'
import Top from './components/Top'
import {
  BrowserRouter as Router,
  Route,
  Link
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
