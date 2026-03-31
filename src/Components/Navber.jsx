import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navber = ({cartItems}) => {
    return (
        <div className='mx-10 py-5 sticky top-0 z-50 bg-white '>

            <div className='main flex flex-wrap space-y-3 space-x-5 justify-center md:justify-between container mx-auto mt-5  '>
                <div>
                    <h3 className='font-semibold text-3xl text-[#4F39F6]'>
                        DigiTools
                    </h3>
                </div>
                <div className='items-center flex'>
                    <ul className='hidden lg:flex space-x-5 font-semibold text-[#101727] cursor-pointer'>
                        <li>
                            Products
                        </li>
                        <li>
                            Features
                        </li>
                        <li>
                            Pricing
                        </li>
                        <li>
                            Testimonials
                        </li>
                        <li>
                            FAQ
                        </li>
                    </ul>
                </div>
                <div className='flex space-x-5 items-center'>
                    <div className='relative'>
                        <ShoppingCart></ShoppingCart>{cartItems.length > 0 ? <span className='bg-red-500 text-white rounded-full px-2 py-1 text-sm absolute -top-4 left-4'>{cartItems.length}</span> : null} 
                    </div>
                    <div>
                        <p className='font-semibold'>Login</p>
                    </div>
                    <div>
                        <button className='btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Get Started</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Navber;