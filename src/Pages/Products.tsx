import Filters from "@/components/ProductFilters/Filters"
import { MobileSheet } from "@/components/ProductFilters/MobileSheet"
import Rating from "@/components/Rating"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"
import { MdOutlineReadMore } from "react-icons/md"
import { BiCartAdd } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import Navbar from "@/components/Navbar/Navbar"
import { useGetAllProductsQuery } from "@/redux/api/api"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { addItem, TCartItem } from "@/redux/Features/cartSlice"

const Products = () => {
    const [sliderValue, setSliderValue] = useState(50);
    const [filterValue, setFilterValue] = useState('');
    const brands = ['all', 'nike', 'adidas', 'puma', 'rebook', 'new balance', 'lacoste', 'champion', 'wilson', 'yonex'];
    const priceSort = ['Low to High', 'High to Low'];

    // redux variables
    const { data, error, isLoading } = useGetAllProductsQuery({});
    // local redux store
    const cart = useAppSelector((state) => state.cartItems);
    const dispatch = useAppDispatch();

    console.log(cart);
    console.log('Data loaded from server:', data);

    // if no data is available yet then the loader will show
    if (isLoading) {
        return <h1>Loading</h1>
    }

    const productsWithImages = data.data?.filter((product) => product?.image !== "");
    console.log(productsWithImages)

    const handleCartButton = (id: string, productName: string, quantity: number, price: number, productImg: string, numberOfTimes: number) => {
        const cartItem: TCartItem = {
            id: id,
            name: productName,
            quantity: quantity,
            price: price,
            image: productImg,
            count: numberOfTimes
        }
        dispatch(addItem(cartItem));
    }

    return (
        <>
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-12 font-poppins py-10">
                {/* left side filter options */}
                <div className="col-span-4 xl:col-span-3 2xl:col-span-4 hidden justify-self-center lg:flex flex-col gap-10">
                    {/* categories starts here */}
                    <div className="flex flex-col gap-4 cursor-pointer ">
                        <p className="text-xl">Categories</p>
                        <p className="font-light hover:text-pink-400">Sports Footwear</p>
                        <p className="font-light hover:text-pink-400">Merchandise</p>
                        <p className="font-light hover:text-pink-400">Tennis Items</p>
                        <p className="font-light hover:text-pink-400">Football Items</p>
                        <p className="font-light hover:text-pink-400">Golf Items</p>
                        <p className="font-light hover:text-pink-400">Soccer Items</p>
                        <p className="font-light hover:text-pink-400">Basketball Items</p>
                    </div>
                    {/* categories ends here */}
                    {/* filter by brand starts  */}
                    <div className="flex flex-col gap-4">
                        <p className="text-xl">Find by Brand</p>
                        <Filters setFilterValue={setFilterValue} filterArray={brands} title={'Brand'} />
                        {/* <p>{filterValue}</p> */}
                    </div>
                    {/* filter by brand ends here */}
                    <div className="flex flex-col gap-4">
                        <p className="text-xl">Sort By Price</p>
                        <Filters setFilterValue={setFilterValue} filterArray={priceSort} title={'Price'} />
                        {/* <p>{filterValue}</p> */}
                    </div>
                    {/* set price range */}
                    <div className="flex flex-col gap-4">
                        <p className="text-xl">Price Range</p>
                        {/* slider value div */}
                        <div className="flex gap-2 w-60">
                            <Slider onValueChange={(e) => setSliderValue(e[0])} defaultValue={[sliderValue]} max={1000} step={10} />
                            <span>{sliderValue}</span>
                        </div>
                    </div>
                    {/* filter buttons */}
                    <div className="flex justify-between items-center">
                        <div>
                            <Button size="sm" className="bg-pink-400 hover:bg-pink-500" type="submit">Apply Filter</Button>
                        </div>
                        <div>
                            <Button size="sm" className="bg-red-500 hover:bg-red-600" type="submit">Clear Filter</Button>
                        </div>
                    </div>
                    {/* filter buttons ends */}
                </div>
                {/* right side products */}
                <div className="col-span-12 lg:col-span-8 xl:col-span-9 2xl:col-span-8 justify-self-center lg:justify-self-start">
                    {/* top filters */}
                    <div className="flex flex-col items-center md:flex-row gap-4 mb-10 justify-center">
                        {/* for smaller screen this sheet will come from the right */}
                        <div className="lg:hidden">
                            <MobileSheet />
                        </div>
                        {/* search field and button */}
                        <div className="flex justify-center items-center gap-2">
                            <form className="xl:w-[500px]">
                                <input placeholder="Search by typing product name" className="border-2 mr-2 rounded-lg py-2 px-4 w-full focus:outline-pink-400 active:border-pink-400" type="text" />
                            </form>
                            <Button className="bg-pink-400 hover:bg-pink-500"><FiSearch size={20} /></Button>
                        </div>
                        {/* search field and button ends */}
                    </div>
                    {/* top filters ends*/}
                    {/* product card container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-6 2xl:gap-10 gap-4 md:gap-3">
                        {/*Product card 1 - Starts Here */}
                        {
                            productsWithImages?.map((product) => {
                                return <>
                                    <div key={product?._id} className="w-80 xl:w-72 2xl:w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl overflow-hidden">
                                        <img src={product?.image} alt="Product" className="h-64 w-80 xl:w-72 2xl:w-80 object-cover hover:scale-105 duration-300 rounded-t-xl" />
                                        <div className="px-3 py-4 xl:w-72 2xl:w-80">
                                            <span className="text-gray-400 mr-3 uppercase text-xs">{product?.brand}</span>
                                            <div className="flex justify-between">
                                                <p className="text-lg font-semibold text-paragraph truncate block capitalize">{product?.name}</p>
                                                <Rating
                                                    count={5}
                                                    value={product?.rating}
                                                    size={20}
                                                />
                                            </div>
                                            <p className="text-sm text-gray-500 truncate block capitalize">{product?.description}</p>
                                            {/* card buttons starts here */}
                                            <div className="flex items-center">
                                                <p className="text-lg font-semibold text-paragraph cursor-auto my-3">{`$${product?.price}`}</p>
                                                <p className="text-sm text-gray-600 cursor-auto ml-2 line-through">$199</p>
                                                <div className="ml-auto flex items-center gap-2">
                                                    <Link to={`/products/${product?._id}`}><Button className="border-2 bg-white border-pink-400 hover:text-white hover:bg-pink-500 text-pink-400"><MdOutlineReadMore size={20} /></Button></Link>
                                                    <Button className="border-2 bg-white border-pink-400 hover:text-white hover:bg-pink-500 text-pink-400" onClick={() => handleCartButton(product?._id, product?.name, product?.stockQuantity, product?.price, product?.image, 1)}><BiCartAdd size={20} /></Button>
                                                </div>
                                            </div>
                                            {/* card buttons ends here */}
                                        </div>
                                    </div>
                                </>
                            })
                        }

                    </div>
                    {/* product card container ends*/}
                </div>
            </div>
        </>
    )
}

export default Products