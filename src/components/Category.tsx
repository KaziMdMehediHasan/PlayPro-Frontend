import jersey from '../assets/images/categories/jersey.jpg'
import shoes from '../assets/images/categories/shoes.jpg'
import soccer from '../assets/images/categories/soccer.jpg'
import tennis from '../assets/images/categories/tennis.jpg'
import golf from '../assets/images/categories/golf.jpg'
import football from '../assets/images/categories/football.jpg'
import badminton from '../assets/images/categories/badminton.jpg'
import basketball from '../assets/images/categories/basketball.jpg'

const Category = () => {
    const categoryImg = [
        { name: 'Merchandise', img: jersey },
        { name: 'Sports Shoes', img: shoes },
        { name: 'Soccer', img: soccer },
        { name: 'Tennis', img: tennis },
        { name: 'Golf', img: golf },
        { name: 'Football', img: football },
        { name: 'Badminton', img: badminton },
        { name: 'Basketball', img: basketball }
    ]
    return (
        <>
            <div className="flex font-poppins items-center justify-center mx-auto my-20 rounded-lg w-fit">
                <h1 className="font-semibold text-xl lg:text-3xl "><span className="text-pink-400 p-1">Browse by</span> <span className="bg-pink-400 text-white py-1 px-2 rounded-lg">Category</span></h1>
            </div>
            {/* container section for categories */}
            <section className="w-fit font-poppins mx-auto grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-6 md:gap-y-6 gap-x-6 mt-10 mb-5">
                {/* card divs start here */}
                {
                    categoryImg.map((category, index) => {
                        return <>
                            <div key={index} className="group relative w-80 lg:w-72 2xl:w-80 h-72 rounded-lg overflow-hidden">
                                <img className="w-full h-full object-cover rounded-lg" src={category.img} />
                                <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gray-600 opacity-0 rounded-lg group-hover:h-full group-hover:opacity-95 duration-500">
                                    <h1 className="text-2xl text-white">{category.name}</h1>
                                    <a className="mt-5 px-8 py-3 rounded-lg bg-pink-400 hover:bg-pink-500 text-white duration-300" href="#">Continue
                                        Shopping</a>
                                </div>
                            </div>
                        </>
                    })
                }
            </section>

        </>
    )
}

export default Category