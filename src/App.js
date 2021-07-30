import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { selectProducts, selectCart } from './app/reducer';
import {useEffect} from 'react'
import { fetchProducts } from './app/reducer';
import Cart from './components/Cart'

function App() {
  const dispatch = useDispatch();
  const cart = useSelector(selectProducts);
  const status = useSelector(state => state.status);
  
  useEffect(()=> {
    dispatch(fetchProducts());
    console.log(status)
  },[])
  return (
    <div className="App">
      {status === 'fulfilled' ? 
      (<Cart/>):(<p>Loading</p>)}
    </div>
  );
}

export default App;
