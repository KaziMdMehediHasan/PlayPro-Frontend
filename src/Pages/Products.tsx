import Filters from "@/components/ProductFilters/Filters"
import { MobileSheet } from "@/components/ProductFilters/MobileSheet"
import Rating from "@/components/Rating"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"
import { MdOutlineReadMore } from "react-icons/md"
import { BiCartAdd } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";

const Products = () => {
    const [sliderValue, setSliderValue] = useState(50);
    const [filterValue, setFilterValue] = useState('');
    const iterations: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-12 font-poppins py-10">
                {/* left side filter options */}
                <div className="col-span-4 hidden justify-self-center lg:flex flex-col gap-10">
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
                    <div className="flex flex-col gap-4">
                        <p className="text-xl">Find by Brand</p>
                        <Filters setFilterValue={setFilterValue} />
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
                    <div>
                        <Button className="bg-pink-400 hover:bg-pink-500" type="submit">Apply Filter</Button>
                    </div>
                </div>
                {/* right side products */}
                <div className="col-span-12 lg:col-span-8 justify-self-center lg:justify-self-start">
                    {/* top filters */}
                    <div className="flex flex-col items-center md:flex-row gap-4 mb-10 justify-center">
                        {/* for smaller screen this sheet will come from the right */}
                        <div className="lg:hidden">
                            <MobileSheet />
                        </div>
                        {/* search field and button */}
                        <div className="flex items-center gap-2">
                            <form className="xl:w-[500px]">
                                <input placeholder="Search by typing product name" className="border-2 mr-2 rounded-lg py-2 px-4 w-full focus:outline-pink-400 active:border-pink-400" type="text" />
                            </form>
                            <Button className="bg-pink-400 hover:bg-pink-500"><FiSearch size={20} /></Button>
                        </div>
                        {/* search field and button ends */}
                    </div>

                    {/* product card container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-10 gap-4 md:gap-3">
                        {/*Product card 1 - Starts Here */}
                        {
                            iterations.map((num) => {
                                return <>
                                    <div className="w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl  overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                            alt="Product" className="h-64 w-80 object-cover hover:scale-105 duration-300 rounded-t-xl" />
                                        <div className="px-3 py-4 w-80">
                                            <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                                            <div className="flex justify-between">
                                                <p className="text-lg font-semibold text-paragraph truncate block capitalize">Product Name</p>
                                                <Rating
                                                    count={5}
                                                    value={5}
                                                    size={20}
                                                />
                                            </div>
                                            <p className="text-sm text-gray-500 truncate block capitalize">Product Name</p>
                                            <div className="flex items-center">
                                                <p className="text-lg font-semibold text-paragraph cursor-auto my-3">$149</p>
                                                <p className="text-sm text-gray-600 cursor-auto ml-2 line-through">$199</p>
                                                <div className="ml-auto flex items-center gap-2">
                                                    <Button className="border-2 bg-white border-pink-400 hover:text-white hover:bg-pink-500 text-pink-400"><MdOutlineReadMore size={16} /></Button>
                                                    <Button className="border-2 bg-white border-pink-400 hover:text-white hover:bg-pink-500 text-pink-400"><BiCartAdd /></Button>
                                                </div>
                                            </div>
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