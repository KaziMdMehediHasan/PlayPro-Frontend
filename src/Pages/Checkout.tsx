import Navbar from '@/components/Navbar/Navbar'
import { Button } from '@/components/ui/button'
import { useState } from 'react';

const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState('cod');
    return (
        <>
            <Navbar />
            {/* title section */}
            <h1 className="font-semibold text-xl my-10 lg:mt-10 lg:mb-20 text-center lg:text-3xl font-poppins">
                <span className="bg-pink-400 text-white py-1 px-2 rounded-lg">Billing</span> <span className="text-pink-400">Details</span>
            </h1>
            {/* container div */}
            <div className="grid grid-cols-1 gap-4 xl:gap-20 lg:gap-14 2xl:gap-4 lg:grid-cols-12 font-poppins xl:px-40 lg:px-20">
                {/* payment method div */}
                <div className="flex flex-col items-center lg:col-span-4 lg:justify-self-start lg:justify-start lg:items-start gap-y-4">
                    <h1 className="text-2xl xl:text-3xl mb-5 font-semibold text-pink-400">Choose a Payment Method:</h1>
                    <div
                        onClick={() => setPaymentMethod('cod')}
                        className={`${paymentMethod === "cod" ? "border-2 border-pink-400 p-6 rounded-lg w-[90%] lg:w-60 xl:w-80" : "border-2 hover:border-pink-400 p-6 rounded-lg w-[90%] lg:w-60 xl:w-80"}`}>
                        <h1 className="text-2xl xl:text-2xl lg:text-xl lg:font-medium text-paragraph">Cash on Delivery</h1>
                        <p className="text-gray-600">Pay after you receive the item</p>
                    </div>
                    <div
                        onClick={() => setPaymentMethod('card')}
                        className={`${paymentMethod === "card" ? "border-2 border-pink-400 p-6 rounded-lg w-[90%] lg:w-60 xl:w-80" : "border-2 hover:border-pink-400 p-6 rounded-lg w-[90%] lg:w-60 xl:w-80"}`}>
                        <h1 className="text-2xl xl:text-2xl lg:text-xl lg:font-medium text-paragraph">Card Pay</h1>
                        <p className="text-gray-600">Bank and digital cards</p>
                    </div>
                </div>
                {/* payment method div ends */}
                {/* customer and billing details */}
                {
                    paymentMethod === 'cod' || '' ? <>
                        <div className="lg:col-span-8 w-[90%] lg:w-full mx-auto border-2 border-pink-400 p-10 mb-4 rounded-lg shadow-lg">
                            <form action="">
                                <div className='mb-4'>
                                    <label className='text-paragraph'>Name</label>
                                    <input type='text' required placeholder='Enter your name' className="p-2 w-full border-2 rounded-lg focus:outline-pink-400" />
                                </div>
                                <div className='mb-4'>
                                    <label className='text-paragraph'>Contact</label>
                                    <input type='string' required placeholder='Enter your phone/telephone number' className="p-2 w-full border-2 rounded-lg focus:outline-pink-400" />
                                </div>
                                <div className='mb-4'>
                                    <label className='text-paragraph'>Email</label>
                                    <input type='email' required placeholder="Enter your email" className="p-2 w-full border-2 rounded-lg focus:outline-pink-400" />
                                </div>
                                <div className='mb-4'>
                                    <label className='text-paragraph'>Delivery Address</label>
                                    <input type='text' required placeholder='Enter precise delivery address' className="p-2 w-full border-2 rounded-lg focus:outline-pink-400" />
                                </div>
                                <div className='mb-4'>
                                    <label className='text-paragraph'>Order notes(Optional)</label>
                                    <textarea rows={5} placeholder="If you have any additional instruction, let us know" className="p-2 w-full border-2 rounded-lg focus:outline-pink-400" />
                                </div>
                                <div className='justify-self-start'>
                                    <Button type='submit' className="bg-white hover:bg-pink-400 text-pink-400 hover:text-white border-2 border-pink-400">Confirm Order</Button>
                                </div>
                            </form>
                        </div>
                    </> : <>
                        <div className="lg:col-span-8 w-[90%] lg:w-full mx-auto border-2 border-pink-400 p-10 rounded-lg shadow-lg">
                            <h1 className='text-3xl'>Coming Soon</h1>
                        </div>
                    </>
                }

                {/* customer and billing details */}
            </div>
            {/* container div ends */}
        </>
    )
}

export default Checkout