import Rating from '@/components/Rating';
import { useState } from 'react'

const SingleProductPage = () => {

    const [images, setImages] = useState({
        img1: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
        img2: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
        img3: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
        img4: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png"
    })

    const [activeImg, setActiveImage] = useState(images.img1)

    const [amount, setAmount] = useState(1);


    return (
        <div className='flex flex-col px-10 py-10 lg:pb-0 justify-between lg:flex-row gap-16 lg:items-center font-poppins'>
            <div className='flex flex-col gap-6 lg:w-2/4'>
                <img src={activeImg} alt="" className='w-full h-full aspect-square object-cover rounded-xl' />
                {/* <div className='flex flex-row justify-between h-24'>
                    <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)} />
                    <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)} />
                    <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)} />
                    <img src={images.img4} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)} />
                </div> */}
            </div>
            {/* ABOUT */}
            <div className='flex flex-col gap-4 lg:w-2/4'>
                <div className='flex flex-col gap-2'>
                    {/* here goes the category */}
                    <span className=' text-pink-400 font-semibold'>Sports Footwear</span>
                    {/* brand info */}
                    <span className=' text-gray-400 font-semibold'>NIKE</span>
                    {/* product title */}
                    <h1 className='text-3xl font-semibold'>Nike Invincible 3</h1>
                    {/* mini description goes here */}
                    <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit id hic exercitationem nisi quidem perferendis doloribus libero vero voluptatem incidunt.</p>
                    <Rating
                        count={5}
                        value={4.5}
                    />
                    <span className='font-semibold text-red-400'>Out of Stock</span>
                </div>
                {/* product description gose here */}
                <p className='text-gray-500'>
                    Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi chilometri, Invincible 3 offre un livello di comfort elevatissimo sotto il piede per aiutarti a dare il massimo oggi, domani e oltre. Questo modello incredibilmente elastico e sostenitivo, è pensato per dare il massimo lungo il tuo percorso preferito e fare ritorno a casa carico di energia, in attesa della prossima corsa.
                </p>
                {/* product price */}
                <h6 className='text-2xl font-semibold'>$ 199.00</h6>
                {/* pick amount button */}
                <div className='flex flex-col gap-4 md:flex-row items-start md:gap-12'>
                    <div className='flex flex-row items-center'>
                        <button className='border-2 border-pink-400 shadow-md hover:bg-pink-500 hover:text-white py-1 px-5 rounded-lg text-pink-400 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                        <button className='border-2 border-pink-400 shadow-md hover:bg-pink-500 hover:text-white py-1 px-5 rounded-lg text-pink-400 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                    </div>
                    <div>
                        <button className='bg-pink-400 shadow-md text-white rounded-lg font-semibold py-3 px-10 h-full hover:bg-pink-500'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProductPage