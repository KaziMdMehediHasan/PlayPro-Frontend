import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import heroTshirt from '../assets/images/hero-tshirt.jpg';
import nfl from '../assets/images/nfl.jpg';
import { JSX } from 'react/jsx-runtime';

function HeroCarousel() {
    const slides = [
        {
            url: heroTshirt,
        },
        {
            url: nfl
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='min-w-screen h-[400px] md:h-[500px] lg:h-[600px] xl:h-[780px] w-full m-auto px-4 relative group'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full flex justify-around items-center rounded-lg bg-center bg-cover duration-500'
            >
                {/* deal heading */}
                {
                    currentIndex === 0 && <>
                        <div className="space-y-4">
                            <div className="bg-gray-900 bg-opacity-55 flex flex-col justify-center items-center p-11 rounded-lg ">
                                <h1 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Exclusive Discounts
                                </h1>
                                <p className="text-yellow-200 md:text-xl">Don't miss out on our limited-time offers!</p>
                            </div>

                        </div>
                        <div className="grid grid-cols-2 gap-4 md:w-[700px] px-4">
                            <div className="bg-pink-600 rounded-lg p-4 flex flex-col items-center justify-center">
                                <PercentIcon className="h-8 w-8 text-primary-foreground" />
                                <h3 className="text-2xl font-bold text-primary-foreground">25%</h3>
                                <p className="text-sm text-primary-foreground">Off Sitewide</p>
                            </div>
                            <div className="bg-pink-300 rounded-lg p-4 flex flex-col items-center justify-center">
                                <GiftIcon className="h-8 w-8 text-secondary-foreground" />
                                <h3 className="text-2xl font-bold text-secondary-foreground">Free</h3>
                                <p className="text-sm text-secondary-foreground">Shipping</p>
                            </div>
                            <div className="bg-pink-100 text-paragraph rounded-lg p-4 flex flex-col items-center justify-center">
                                <TagIcon className="h-8 w-8" />
                                <h3 className="text-2xl font-bold">30%</h3>
                                <p className="text-sm">Off Accessories</p>
                            </div>
                            <div className="bg-card text-paragraph rounded-lg p-4 flex flex-col items-center justify-center">
                                <CodeIcon className="h-8 w-8" />
                                <h3 className="text-2xl font-bold">$10</h3>
                                <p className="text-sm">Off First Order</p>
                            </div>
                        </div>
                    </>
                }
                {
                    currentIndex > 0 && <>
                        <div className="space-y-4 bg-pink-500 p-8 md:p-12 lg:p-20 rounded-lg bg-opacity-70 animate-fade-in-left">
                            <h1 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                Unbeatable Deals
                            </h1>
                            <p className="text-muted-foreground md:text-xl text-center text-yellow-300">Hurry, these offers won't last long!</p>
                        </div>
                    </>
                }
                {/* deal cards */}

            </div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HeroCarousel;


function CodeIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    )
}


function GiftIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
            <rect x="3" y="8" width="18" height="4" rx="1" />
            <path d="M12 8v13" />
            <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
            <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
        </svg>
    )
}


function PercentIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
            <line x1="19" x2="5" y1="5" y2="19" />
            <circle cx="6.5" cy="6.5" r="2.5" />
            <circle cx="17.5" cy="17.5" r="2.5" />
        </svg>
    )
}


// function ShoppingCartIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <circle cx="8" cy="21" r="1" />
//             <circle cx="19" cy="21" r="1" />
//             <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
//         </svg>
//     )
// }


function TagIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
            <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
        </svg>
    )
}