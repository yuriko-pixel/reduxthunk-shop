import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { selectCart } from './ProductSlice';

import { incrementCart, decrementCart, deleteFromCart } from './ProductSlice';
import cartstyle from '../styles/cart.module.scss'

const Box = () => {
    const dispatch = useDispatch();
    const cart = useSelector(selectCart);
    const cartItem = useSelector(state => state.cartItem)

    return (
        <>
         <h1>Cart Items</h1>
            <ul className={cartstyle.flex}>
                {cartItem === 0 ? (<p>No Item Found.</p>):(cart.map(item =>
                    <li className={cartstyle.itemlist}>
                        <div className={cartstyle.imageframe}>
                            <img src={item.image} alt={item.title} className={cartstyle.image} />
                        </div>
                        <div className={cartstyle.info}>
                            <p className={cartstyle.title}>{item.title}</p>
                            <p className={cartstyle.price}>{item.price}</p>
                            <div className={cartstyle.flex}>
                                <button onClick={() => dispatch(decrementCart(item.id))}>-</button>
                                {item.count}
                                <button onClick={() =>dispatch(incrementCart(item.id))}>+</button>
                            </div>
                            <button onClick={() =>dispatch(deleteFromCart(item.id))}>Delete the item</button>
                        </div>
                    </li>
                    ))}
            </ul>
        </>
    )
}

export default Box