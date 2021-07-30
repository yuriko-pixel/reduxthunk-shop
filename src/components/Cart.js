import React from 'react'
import { selectProducts, selectCart } from '../app/reducer';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
    const cart = useSelector(selectProducts);
    const status = useSelector(selectCart);
    const dispatch = useDispatch();

    React.useEffect(()=> {
    },[])

    return (
        <ol>
            {cart ? (cart.map(item=><p>{item.title}</p>)):(<p></p>)}
        </ol>
    )
}

export default Cart