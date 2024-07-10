import Category from "@/components/Category"
import ContactUs from "@/components/ContactUs"
import HeroCarousel from "@/components/Hero"
import ProductCard from "@/components/ProductCard"

const Home = () => {
    return (
        <>
            <HeroCarousel />
            <ProductCard />
            <Category />
            <ContactUs />
        </>
    )
}

export default Home