import React from 'react'
import { Link } from "react-router-dom";
import topstyle from '../styles/top.module.scss'
import Cart from './Cart'

import { useSelector } from 'react-redux';

const Top = () => {
    const cartItem = useSelector(state => state.cartItem);
    const status = useSelector(state => state.status);
    return (
        <div className={topstyle.app}>
            <div className={topstyle.container}>
            <h1>Redux Fake Shop Cart</h1>
                <img src="https://img.icons8.com/material-outlined/48/000000/shopping-cart--v1.png" alt="shop" className={topstyle.img} />
                {cartItem !== 0 ? (<div className={topstyle.cartPop}>{cartItem}</div>):(<div></div>)}
            </div>
            {status === 'fulfilled' ? 
            (<Cart/>):(<p>Loading</p>)}
        </div>
    )
}

export default Top