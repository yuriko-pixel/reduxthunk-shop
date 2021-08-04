import React from 'react'
import { selectProducts, selectCart } from './ProductSlice';
import { useSelector, useDispatch } from 'react-redux';
import cartstyle from '../styles/cart.module.scss'
import { incrementCart } from './ProductSlice';

const Cart = () => {
    const cart = useSelector(selectProducts);
    
    const dispatch = useDispatch();

    React.useEffect(()=> {
    },[])

    return (
        <ul className={cartstyle.itemul}>
            {cart ? (cart.map(item=>
            <li className={cartstyle.itemlist}>
                <div className={cartstyle.imageframe}>
                    <img src={item.image} alt={item.title} className={cartstyle.image} />
                </div>
                <div className={cartstyle.info}>
                    <p className={cartstyle.title}>{item.title}</p>
                    <p className={cartstyle.price}>{item.price}</p>
                    <button onClick={()=>dispatch(incrementCart(item.id))} className={cartstyle.btn}>Add to Cart!</button>
                </div>
            </li>)):(<p></p>)}
        </ul>
    )
}

export default Cart