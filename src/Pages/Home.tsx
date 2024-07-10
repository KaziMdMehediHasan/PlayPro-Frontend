import HeroCarousel from "@/components/Hero"
import Navbar from "@/components/Navbar/Navbar"
import ProductCard from "@/components/ProductCard"

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroCarousel />
            <ProductCard />
        </>
    )
}

export default Home