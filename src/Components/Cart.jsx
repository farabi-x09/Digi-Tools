import { Check } from 'lucide-react';
import React, { use } from 'react';

const Cart = ({ dataPromise }) => {
    const data = use(dataPromise)
    console.log(data);
    const tagStyle = {
        popular: "text-purple-500 border-purple-500 bg-purple-100",
        "best seller": "text-green-500 border-green-500 bg-green-100",
        new: "text-blue-500 border-blue-500 bg-blue-100"
    };
    return (
        <div>
            <div className='container mx-auto my-20 '>
                <div className='w-1/2 mx-auto space-y-5'>
                    <h1 className='font-bold text-5xl text-center'>Premium Digital Tools</h1>
                    <p className='text-center text-lg text-taupe-400'>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
                    <div className=' flex justify-center mt-10 '>

                        <div className="tabs tabs-box gap-5 bg-transparent justify-center">
                            <input type="radio" name="my_tabs_1" className="tab w-40 rounded-full [--tab-bg:#4F39F6] border-2 text-black checked:text-white  border-purple-500" aria-label="Products" defaultChecked />

                            <input type="radio" name="my_tabs_1" className="tab w-40 rounded-full [--tab-bg:#4F39F6]   border-2  text-black checked:text-white border-purple-500" aria-label="Cart " />

                        </div>
                    </div>
                </div>

                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 px-5'>
                    {
                        data.map(item =>

                            <div key={item.id} className='space-y-5 p-5 rounded-2xl border-2 border-gray-300 '>
                                <div className='flex justify-between '>
                                    <img className='w-15 m-5 shadow-2xl rounded-full' src={item.icon} alt={item.name} />
                                    <p className={`text-sm px-5 h-10 py-2 -mt-4  rounded-2xl  ${tagStyle[item.tagType]}`}>
                                        {item.tagType}
                                    </p>
                                </div>
                                <div className='space-y-2'>
                                    <h2 className='text-2xl font-semibold'>{item.name}</h2>
                                    <p className='text-[#627382]'>{item.description}</p>
                                    <p>
                                        <span className='text-2xl font-semibold'> ${item.price}</span><span className='text-[#627382]'>/{item.period} </span> </p>
                                </div>
                                <div>
                                    <ul>
                                        {item.features.map((feature, index) => (
                                            <li className='flex gap-2 text-[#627382]' key={index}>

                                                <Check className='text-green-500'></Check> {feature}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <button className=' btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-12 py-2 rounded-full'>Buy Now</button>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;