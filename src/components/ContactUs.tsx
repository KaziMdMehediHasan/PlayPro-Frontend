import { Button } from "./ui/button"

const ContactUs = () => {
    return (
        <>
            <div className="flex font-poppins items-center justify-center mx-auto my-12 rounded-lg w-fit">
                {/* <h1 className="font-semibold text-xl lg:text-3xl "><span className="bg-pink-400 text-white py-1 px-2 rounded-lg">Contact</span> <span className="text-pink-400">Us</span></h1> */}
            </div>
            {/* contact section */}
            <div className="bg-white font-poppins">
                <div className="mx-auto flex lg:flex-row flex-col justify-around">
                    <div className="px-6 w-full lg:w-[50%] pb-20 pt-24 sm:pt-32">
                        <div className="mx-auto">
                            {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contact Us</h2> */}
                            <h1 className="font-semibold text-xl lg:text-3xl"><span className="bg-pink-400 text-white py-1 px-2 rounded-lg">Contact</span> <span className="text-pink-400">Us</span></h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">Feel free to reach out to us for any inquiries or assistance.
                                We're here to help!</p>
                            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Email</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                            stroke="currentColor" aria-hidden="true" className="h-7 w-6 text-gray-400">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75">
                                            </path>
                                        </svg>
                                    </dt>
                                    <dd><a className="hover:text-gray-900" href="mailto:contact@yourcompany.com">contact@yourcompany.com</a></dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Address</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                            stroke="currentColor" aria-hidden="true" className="h-7 w-6 text-gray-400">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z">
                                            </path>
                                        </svg>
                                    </dt>
                                    <dd>123 Main Street, Cityville, Country</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <div className="bg-pink-400 w-full lg:w-[50%]">
                        <form className="px-6 pb-24 pt-20 sm:pb-32">
                            <div className="mx-auto flex flex-col justify-center items-center lg:mr-0">
                                {/* form div */}
                                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                    {/*form fields start*/}
                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                                        <div className="mt-2.5">
                                            <input type="text" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-paragraph shadow-md ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6" name="firstName" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                                        <div className="mt-2.5">
                                            <input type="text" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="lastName" />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                                        <div className="mt-2.5">
                                            <input type="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="email" />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                                        <div className="mt-2.5">
                                            <textarea id="message" rows={4} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="message"></textarea>
                                        </div>
                                    </div>
                                    {/*form fields ends*/}
                                </div>
                                {/* form div ends */}
                                <div className="mt-8 flex justify-end">
                                    <Button type="submit" className="w-max bg-pink-400 px-5 py-1.5 text-sm font-semibold text-white transition-colors duration-150 ease-in-out hover:bg-pink-500">Send message</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs