import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"
import { Link, NavLink } from "react-router-dom"
import { MdOutlineShoppingCart } from "react-icons/md";
import { useAppSelector } from "@/redux/hooks"

export default function Navbar() {
    const cart = useAppSelector((state) => state.cartItems);
    // console.log(cart);
    return (
        <header className="flex h-16 w-full items-center justify-between bg-gray-50 px-4 md:px-6 font-poppins">
            <div>
                <Link to="/" className="flex items-center gap-2 font-semibold text-2xl">
                    <MountainIcon className="h-7 w-7" />
                    {/* <span className="sr-only">PlayPro</span> */}
                    <p><span className="text-pink-500">Play</span>Pro</p>
                </Link>
            </div>
            {/* navbar menus starts here */}
            <nav className="hidden items-center justify-center gap-6 text-sm md:flex lg:flex text-[17px]">
                <NavLink to="/" className="hover:text-pink-500 p-2 rounded-sm">
                    Home
                </NavLink>
                <NavLink to="/products" className="hover:text-pink-500 p-2 rounded-sm">
                    Store
                </NavLink>
                <a href="#" className="hover:text-pink-500 p-2 rounded-sm">
                    Manage Store
                </a>
                <a href="#" className="hover:text-pink-500 p-2 rounded-sm">
                    About
                </a>
                <a href="#" className="hover:text-pink-500 p-2 rounded-sm">
                    Contact
                </a>
            </nav>
            {/* navbar menus starts here */}
            {/* triggers only when screen tablet and mobile view is enabled */}
            <div className="flex items-center gap-4">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full lg:hidden md:hidden">
                            <MenuIcon className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    {/* for mobile and tablet devices these icons will show */}
                    <SheetContent side="left" className="lg:hidden">
                        <nav className="grid gap-6 text-lg font-medium">
                            <Link
                                to="/"
                                className="flex items-center gap-4 px-2.5 text-paragraph hover:text-pink-500"
                            >
                                <HomeIcon className="h-5 w-5" />
                                Home
                            </Link>
                            <Link
                                to="/products"
                                className="flex items-center gap-4 px-2.5 text-paragraph hover:text-pink-500"

                            >
                                <PackageIcon className="h-5 w-5" />
                                Store
                            </Link>
                            <a
                                href="#"
                                className="flex items-center gap-4 px-2.5 text-paragraph hover:text-pink-500"

                            >
                                <InfoIcon className="h-5 w-5" />
                                About
                            </a>
                            <a
                                href="#"
                                className="flex items-center gap-4 px-2.5 text-paragraph hover:text-pink-500"

                            >
                                <ContactIcon className="h-5 w-5" />
                                Contact
                            </a>
                        </nav>
                    </SheetContent>
                </Sheet>
                <div className="relative">
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-pink-500 hover:text-white">
                        <Link to='/cart'><MdOutlineShoppingCart size={30} /></Link>
                        {/* <span className="sr-only">Cart</span> */}
                    </Button>
                    {
                        cart.length !== 0 && <span className='w-4 h-4 lg:w-5 lg:h-5 text-[12px] top-0 right-0 flex justify-center items-center absolute rounded-full bg-pink-400 text-white'>{cart.length}</span>
                    }

                </div>

            </div>
        </header>
    )
}

function ContactIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <circle cx="12" cy="10" r="2" />
            <line x1="8" x2="8" y1="2" y2="4" />
            <line x1="16" x2="16" y1="2" y2="4" />
        </svg>
    )
}


function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    )
}


function InfoIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
        </svg>
    )
}


function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}


function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}


function PackageIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m7.5 4.27 9 5.15" />
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22V12" />
        </svg>
    )
}
