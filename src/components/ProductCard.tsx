import { MdOutlineReadMore } from "react-icons/md";
import { Button } from "./ui/button";
import { useState } from "react";
import Rating from "./Rating";

const ProductCard = () => {
    const [rating, setRating] = useState(0);
    console.log(rating);
    return (
        <>
            <div className="flex font-poppins items-center justify-center mx-auto my-20 rounded-lg w-fit">
                <h1 className="font-semibold text-xl lg:text-3xl ">
                    <span className="bg-pink-400 text-white py-1 px-2 rounded-lg">Featured</span> <span className="text-pink-400">Products</span></h1>
            </div>

            {/* Grid Section - Starts Here */}
            <section className="w-fit font-poppins mx-auto grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-6 md:gap-y-6 gap-x-6 mt-10 mb-5">

                {/*Product card 1 - Starts Here */}
                <div className="w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl  overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="Product" className="h-64 w-80 object-cover hover:scale-105 duration-300 rounded-t-xl" />
                    <div className="px-3 py-4 w-80">
                        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                        <div className="flex justify-between">
                            <p className="text-lg font-semibold text-paragraph truncate block capitalize">Product Name</p>
                            <Rating
                                count={5}
                                value={rating}
                                edit={true}
                                size={20}
                                onChange={(value) => setRating(value)}
                            />
                        </div>
                        <p className="text-sm text-gray-500 truncate block capitalize">Product Name</p>
                        <div className="flex items-center">
                            <p className="text-lg font-semibold text-paragraph cursor-auto my-3">$149</p>
                            <p className="text-sm text-gray-600 cursor-auto ml-2 line-through">$199</p>
                            <div className="ml-auto">
                                <Button className="bg-pink-400 text-white hover:bg-white hover:text-pink-400">View Details<MdOutlineReadMore size={24} /></Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Product card 1 - Ends Here*/}

            </section>
            {/* Grid Section - Ends Here*/}
        </>
    )
}

export default ProductCard