import Navbar from '@/components/Navbar/Navbar';
import Rating from '@/components/Rating';
import { useGetSingleProductQuery } from '@/redux/api/api';
import { useState } from 'react'
import { useParams } from 'react-router-dom';

const SingleProductPage = () => {

    const [amount, setAmount] = useState(1);
    const { productId } = useParams();
    const { data, error, isLoading } = useGetSingleProductQuery(productId);

    if (isLoading) {
        return <h1>Loading....</h1>
    }

    console.log(data);
    const { name, stockQuantity, brand, description, productDescription, image, rating, price, category } = data.data;

    // creating a brand name consistency
    let convertedBrandName = '';

    if (brand.includes('-')) {
        const temp = brand.replace('-', ' ');
        convertedBrandName = temp.slice(0, 1).toUpperCase() + temp.slice(1).toLowerCase();
    } else {
        convertedBrandName = brand.slice(0, 1).toUpperCase() + brand.slice(1).toLowerCase();
    }
    console.log(convertedBrandName);

    return (
        <>
            <Navbar />
            <div className='flex flex-col px-10 py-10 lg:pb-0 justify-between lg:flex-row gap-16 lg:items-center font-poppins'>
                <div className='flex flex-col gap-6 lg:w-2/4'>
                    <img src={image} alt="" className='w-full h-full aspect-square object-cover rounded-xl' />
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
                        <span className=' text-pink-400 font-semibold'>{category}</span>
                        {/* brand info */}
                        <span className=' text-gray-400 font-semibold'>{convertedBrandName}</span>
                        {/* product title */}
                        <h1 className='text-3xl font-semibold'>{name}</h1>
                        {/* mini description goes here */}
                        <p className='text-gray-500 text-sm'>{description}</p>
                        <Rating
                            count={5}
                            value={rating}
                        />
                        <span className='font-semibold text-red-400'>{`${stockQuantity} Left in stock`}</span>
                    </div>
                    {/* product description gose here */}
                    <p className='text-gray-500'>{productDescription}</p>
                    {/* product price */}
                    <h6 className='text-2xl font-semibold'>{`$${price}`}</h6>
                    {/* pick amount button */}
                    <div className='flex flex-col gap-4 md:flex-row items-center md:gap-12'>
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
        </>
    )
}

export default SingleProductPage