import Category from "@/components/Category"
import ContactUs from "@/components/ContactUs"
import HeroCarousel from "@/components/Hero"
import Navbar from "@/components/Navbar/Navbar"
import ProductCard from "@/components/ProductCard"

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroCarousel />
            <ProductCard />
            <Category />
            <ContactUs />
        </>
    )
}

export default Home