import Navbar from '@/components/Navbar/Navbar'
import { Button } from '@/components/ui/button'
import { useState } from 'react';

const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState('');
    return (
        <>
            <Navbar />
            {/* container div */}

            <h1 className="font-semibold text-xl mt-10 mb-20 text-center lg:text-3xl font-poppins">
                <span className="bg-pink-400 text-white py-1 px-2 rounded-lg">Billing</span> <span className="text-pink-400">Details</span>
            </h1>
            <div className="grid grid-cols-12 font-poppins px-40">
                {/* payment method div */}
                <div className="flex flex-col col-span-4 justify-self-start justify-start items-start gap-y-4">
                    <h1 className="text-3xl mb-5 font-semibold text-pink-400">Choose a Payment Method:</h1>
                    <div
                        onClick={() => setPaymentMethod('cod')}
                        className={`${paymentMethod === "cod" ? "border-2 border-pink-400 p-6 rounded-lg w-80" : "border-2 hover:border-pink-400 p-6 rounded-lg w-80"}`}>
                        <h1 className="text-2xl text-paragraph">Cash on Delivery</h1>
                        <p className="text-gray-600">Pay after you receive the item</p>
                    </div>
                    <div
                        onClick={() => setPaymentMethod('card')}
                        className={`${paymentMethod === "card" ? "border-2 border-pink-400 p-6 rounded-lg w-80" : "border-2 hover:border-pink-400 p-6 rounded-lg w-80"}`}>
                        <h1 className="text-2xl text-paragraph">Card Pay</h1>
                        <p className="text-gray-600">Bank and digital cards</p>
                    </div>
                </div>
                {/* payment method div ends */}
                {/* customer and billing details */}
                {
                    paymentMethod === 'cod' ? <>
                        <div className="col-span-8 border-2 border-pink-400 p-10 rounded-lg shadow-lg">
                            <form action="">
                                <div className='mb-4'>
                                    <label className='text-paragraph'>Customer Name</label>
                                    <input type='text' required className="p-2 w-full border-2 rounded-lg focus:outline-pink-400" />
                                </div>
                                <div className='mb-4'>
                                    <label className='text-paragraph'>Contact</label>
                                    <input type='string' required className="p-2 w-full border-2 rounded-lg focus:outline-pink-400" />
                                </div>
                                <div className='mb-4'>
                                    <label className='text-paragraph'>Email</label>
                                    <input type='email' required className="p-2 w-full border-2 rounded-lg focus:outline-pink-400" />
                                </div>
                                <div className='mb-4'>
                                    <label className='text-paragraph'>Delivery Address</label>
                                    <input type='text' required className="p-2 w-full border-2 rounded-lg focus:outline-pink-400" />
                                </div>
                                <div className='mb-4'>
                                    <label className='text-paragraph'>Order notes (Optional)</label>
                                    <textarea rows={5} className="p-2 w-full border-2 rounded-lg focus:outline-pink-400" />
                                </div>
                                <div className='justify-self-start'>
                                    <Button type='submit' className="bg-white hover:bg-pink-400 text-pink-400 hover:text-white border-2 border-pink-400">Confirm Order</Button>
                                </div>

                            </form>

                        </div>
                    </> : <>
                        <div className="col-span-8 flex justify-center items-center border-2 border-pink-400 p-10 rounded-lg shadow-lg">
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