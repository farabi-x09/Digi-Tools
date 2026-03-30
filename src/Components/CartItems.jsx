import React, { use } from 'react';
import CartUI from './CartUI';

const CartItems = ({ dataPromise, cartItems, setCartItems }) => {
    const data = use(dataPromise)
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 px-5'>
            {
                data.map(item =>
                    <CartUI cartItems={cartItems} setCartItems={setCartItems} item={item} key={item.id}></CartUI>
                )
            }
        </div>
    );
};

export default CartItems;