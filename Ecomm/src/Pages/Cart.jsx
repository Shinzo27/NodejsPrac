import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import driedFruit4 from '../assets/driedfruit4.jpg'
import driedFruit2 from '../assets/driedfruit2.jpg'
import driedFruit1 from '../assets/driedfruit1.jpg'
import Button from '../Components/Shared/Button'

const Cart = () => {
  return (
    <>
        <Navbar/>
        <div className='container pt-10'>
            <div className=' p-9  bg-gray-200 rounded-lg'>
                <div>
                    <h1 className=' text-2xl font-semibold'>Shopping Cart</h1>
                </div>
                <div className='divide-y divide-dashed pt-8 '>
                    <div className='flex justify-between pt-8'> 
                        <div className='flex justify-center items-center gap-5'>
                            <div className='h-28 w-28'>
                                <img src={driedFruit4} alt="" className='w-full h-full object-contain rounded-lg' />
                            </div>
                            <div>
                                <div>
                                    <h1 className='text-lg'>Item Name</h1>
                                    <p className='text-gray-500 text-sm'>Packing Type</p>
                                </div>
                                <div className='pt-5'>
                                    <p>
                                        ✅ in stock
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='text-center flex flex-col justify-center items-center'>
                                <div>
                                    <button className='w-7 h-7 mr-3 rounded-md bg-gray-400 text-white'>+</button>
                                    <input type="number" name="" id="" className='rounded-md border-none decoration-transparent text-center w-24' />
                                    <button className='w-7 h-7 ml-3 rounded-md bg-gray-400 text-white'>-</button>
                                </div>
                                <a className=' pt-1 text-blue-600'>remove</a>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-xl'>
                                $35.00
                            </h1>
                        </div>
                    </div>
                    <div className='flex justify-between pt-8'> 
                        <div className='flex justify-center items-center gap-5'>
                            <div className='h-28 w-28'>
                                <img src={driedFruit1} alt="" className='w-full h-full object-contain rounded-lg' />
                            </div>
                            <div>
                                <div>
                                    <h1 className='text-lg'>Item Name</h1>
                                    <p className='text-gray-500 text-sm'>Packing Type</p>
                                </div>
                                <div className='pt-5'>
                                    <p>
                                        ✅ in stock
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='text-center flex flex-col justify-center items-center'>
                                <div>
                                    <button className='w-7 h-7 mr-3 rounded-md bg-gray-400 text-white'>+</button>
                                    <input type="number" name="" id="" className='rounded-md border-none decoration-transparent text-center w-24' />
                                    <button className='w-7 h-7 ml-3 rounded-md bg-gray-400 text-white'>-</button>
                                </div>
                                <a className=' pt-1 text-blue-600'>remove</a>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-xl'>
                                $35.00
                            </h1>
                        </div>
                    </div>
                    <div className='flex justify-between pt-8'> 
                        <div className='flex justify-center items-center gap-5'>
                            <div className='h-28 w-28'>
                                <img src={driedFruit2} alt="" className='w-full h-full object-contain rounded-lg' />
                            </div>
                            <div>
                                <div>
                                    <h1 className='text-lg'>Item Name</h1>
                                    <p className='text-gray-500 text-sm'>Packing Type</p>
                                </div>
                                <div className='pt-5'>
                                    <p>
                                        ✅ in stock
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='text-center flex flex-col justify-center items-center'>
                                <div>
                                    <button className='w-7 h-7 mr-3 rounded-md bg-gray-400 text-white'>+</button>
                                    <input type="number" name="" id="" className='rounded-md border-none decoration-transparent text-center w-24' />
                                    <button className='w-7 h-7 ml-3 rounded-md bg-gray-400 text-white'>-</button>
                                </div>
                                <a className=' pt-1 text-blue-600'>remove</a>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-xl'>
                                $35.00
                            </h1>
                        </div>
                    </div>
                    <div className='flex justify-between pt-8'> 
                        <div className='flex justify-center items-center gap-5'>
                            <div className='h-28 w-28'>
                                <img src={driedFruit4} alt="" className='w-full h-full object-contain rounded-lg' />
                            </div>
                            <div>
                                <div>
                                    <h1 className='text-lg'>Item Name</h1>
                                    <p className='text-gray-500 text-sm'>Packing Type</p>
                                </div>
                                <div className='pt-5'>
                                    <p>
                                        ✅ in stock
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='text-center flex flex-col justify-center items-center'>
                                <div>
                                    <button className='w-7 h-7 mr-3 rounded-md bg-gray-400 text-white'>+</button>
                                    <input type="number" name="" id="" className='rounded-md border-none decoration-transparent text-center w-24' />
                                    <button className='w-7 h-7 ml-3 rounded-md bg-gray-400 text-white'>-</button>
                                </div>
                                <a className=' pt-1 text-blue-600'>remove</a>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-xl'>
                                $35.00
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-200 mt-10 p-4 flex flex-cols rounded-lg'>
                
                Subtotal : 350<br/>
                Shipping: 150<br/>
                Tax: 50<br/>
                Order Total: 550
            </div>
            <div className=' mt-10 flex flex-cols'>
                <Button text={"Checkout"}/>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Cart