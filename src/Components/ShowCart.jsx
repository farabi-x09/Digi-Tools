import React from 'react';
import { toast } from 'react-toastify';

const ShowCart = ({ cartItems, setCartItems }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    const handleCheckout = () => {

        setCartItems([]);
        toast('Successfully proceeding to checkout!');
    };
    const handleDelete = (id) => {
        const remaining = cartItems.filter(cart => cart.id !== id);
        setCartItems(remaining);
        toast.error('Product removed from cart!');

    }

    return (
        <div className='container mx-auto border-2 border-gray-300 rounded-2xl p-10 mt-10'>
            <h1 className='font-semibold text-2xl'>Your Cart</h1>

            {
                cartItems.length === 0 ? <p className='flex justify-center text-2xl text-[#627382] mt-5'>Your cart is empty.</p> : <div>
                    <div>
                        {cartItems.map(cart =>
                            <div key={cart.id} className='flex flex-wrap justify-between items-center gap-5 my-5 p-5 rounded-2xl border border-gray-300 '>
                                <div className='flex items-center gap-5 '>
                                    <img className='w-15 m-5 shadow-2xl rounded-full' src={cart.icon} alt={cart.name} />
                                    <div className='space-y-2'>
                                        <h2 className='text-2xl font-semibold'>{cart.name}</h2>
                                        <p className='text-xl text-[#627382]'>${cart.price}</p>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={() => handleDelete(cart.id)} className='btn text-red-500 font-semibold text-lg'>Remove</button>
                                </div>
                            </div>

                        )}
                    </div>
                    <div>
                        <div className='flex justify-between items-center '>
                            <p className='text-xl font-semibold my-10'>Total</p>
                            <p className='text-2xl font-bold'>${totalPrice}</p>

                        </div>
                        <button onClick={handleCheckout} className='bg-linear-to-r from-[#9514FA] to-[#4F39F6] text-white py-4 w-full rounded-full '>Proceed to Checkout</button>
                    </div>

                </div>
            }


        </div>
    );
};

export default ShowCart;