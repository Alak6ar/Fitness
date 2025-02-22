import React from 'react'
import img from '../../public/images/asa.jpg'
import remove_ic from '../../public/images/times-ic.svg'
import pen_ic from '../../public/images/pen-ic.svg'

import { SlClose } from "react-icons/sl";
import { FaPen } from "react-icons/fa6";


const ShoppingCart = () => {
  return (
    <div className='max-w-screen-2xl mx-auto px-10'>
        <div className='flex justify-between'>
            <div className='w-full'>
                <h1 className='text-2xl font-bold mb-8'>Shopping Cart</h1>

               <div className='w-full pr-24'>
               <div className='py-2 mb-4 flex justify-between border-b font-bold border-gray-300'>
                    <div>Item</div>
                    <div className='flex space-x-6 mr-24'>
                    <div>Price</div>
                    <div>Qty</div>
                    <div>Subtotal</div>
                    </div>
                </div>

                <div className='divide-y'>
                    <div className='flex items-center py-6'>
                        <div className='mr-10'>
                            <img src={img} alt="" className='size-32 min-w-32 object-cover drop-shadow-lg'/>
                        </div>
                        <div className='flex justify-between w-full'>
                        <div className='max-w-56'>
                            <p className='text-base font-normal'>SportQ Cement Barbell Set Adjustable Weights Set Home</p>
                        </div>
                        <div className='flex space-x-6'>
                            <div className='font-bold'>$650</div>
                            <div>
                                <input type="number" value="1" className='bg-gray-100 w-16 h-12 pl-4 rounded-md '/>
                            </div>
                            <div className='font-bold'>$650</div>
                            <div className='flex flex-col pl-10'>
                                <button type='button' className='mb-2'>
                                    <img src={remove_ic} alt="" />
                                </button>
                                <button type='button'>
                                <img src={pen_ic} alt="" />
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className='flex items-center py-6'>
                        <div className='mr-10'>
                            <img src={img} alt="" className='size-32 min-w-32 object-cover drop-shadow-lg'/>
                        </div>
                        <div className='flex justify-between w-full'>
                        <div className='max-w-56'>
                            <p className='text-base font-medium'>SportQ Cement Barbell Set Adjustable Weights Set Home</p>
                        </div>
                        <div className='flex space-x-6'>
                            <div className='font-bold'>$650</div>
                            <div>
                                <input type="number" defaultValue="1" className='bg-gray-100 w-16 h-12 pl-4 rounded-md '/>
                            </div>
                            <div className='font-bold'>$650</div>
                            <div className='flex flex-col pl-10'>
                                <button type='button' className='mb-2'>
                                    <img src={remove_ic} alt="" />
                                </button>
                                <button type='button'>
                                <img src={pen_ic} alt="" />
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className='flex items-center py-6'>
                        <div className='mr-10'>
                            <img src={img} alt="" className='size-32 min-w-32 object-cover drop-shadow-lg'/>
                        </div>
                        <div className='flex justify-between w-full'>
                        <div className='max-w-56'>
                            <p className='text-base font-medium'>SportQ Cement Barbell Set Adjustable Weights Set Home</p>
                        </div>
                        <div className='flex space-x-6'>
                            <div className='font-bold'>$650</div>
                            <div>
                                <input type="number" value="1" className='bg-gray-100 w-16 h-12 pl-4 rounded-md '/>
                            </div>
                            <div className='font-bold'>$650</div>
                            <div className='flex flex-col pl-10'>
                                <button type='button' className='mb-2'>
                                    <img src={remove_ic} alt="" />
                                </button>
                                <button type='button'>
                                <img src={pen_ic} alt="" />
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className='flex mt-2 '>
                    <div className='flex flex-1'> 
                        <button type='button' className='mr-6 border-2 border-gray-600 text-gray-600 max-w-52 h-9 w-full rounded-2xl'>
                            Continue Shopping
                        </button>
                        <button type='button' className='bg-black text-white max-w-52 h-9 w-full rounded-2xl'>
                             Clear Shopping Cart
                        </button>
                    </div>

                    <div className='flex flex-1 justify-end'>
                    <button type='button' className='bg-black text-white max-w-52 h-9 w-full rounded-2xl'>
                    Update Shopping Cart
                        </button>
                    </div>
                </div>
               </div>
            </div>

            <div className='rounded-md bg-slate-100 p-6 max-w-sm drop-shadow-lg h-auto mt-16'>
                <div className='mb-3'>
                    <h1 className='font-bold text-2xl'>Summary</h1>
                </div>
                <div className='border-b border-gray-400 pb-4'>
                <div className='mb-2'>
                    <h5 className='mb-1 text-lg'>Estimate Shipping and Tax</h5>
                    <p className='text-sm'>Enter your destination to get a shipping estimate.</p>
                </div>
                <div>
                    <h5 className='text-lg'>Apply Discount Code</h5>
                </div>
                </div>

                <div className='pt-4 space-y-4'>
                <div className='flex justify-between font-bold text-xs'>
                    <div>
                        Subtotal
                    </div>
                    <div>
                        $680
                    </div>
                </div>

                <div className='flex justify-between font-bold text-xs'>
                    <div>
                        <div className='mb-1.5'>Shipping</div>
                        <p className='text-gray-500 font-regular'>(Standard Rate - Price may vary depending on the item/destination. TECS Staff will contact you.)</p>
                    </div>
                    <div>
                        $21.00
                    </div>
                </div>

                <div className='flex justify-between font-bold text-xs'>
                    <div>
                        Tax
                    </div>
                    <div>
                        $1.92
                    </div>
                </div>


                <div className='flex justify-between font-bold text-xs'>
                    <div>
                        GST (10%)
                    </div>
                    <div>
                        $1.91
                    </div>
                </div>

                <div className='flex justify-between font-bold text-xs'>
                    <div>
                        Order Total
                    </div>
                    <div className='text-base'>
                        $703
                    </div>
                </div>
                </div>
                <div className='mt-4'>
                    <button className='bg-red-600 mb-2 rounded-full text-white h-12 w-full font-semibold mb-3.5'>
                    Proceed to Checkout
                    </button>
                    <button className='bg-yellow-500 mb-2 rounded-full text-blue-950 h-12 w-full font-semibold mb-3.5'>
                    <span>Check out with</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShoppingCart