import Navbar from "@/components/Navbar/Navbar"
import { Button } from "@/components/ui/button"

const ManageProducts = () => {
    return (
        <>
            <Navbar />
            <div className="px-40 mx-auto font-poppins mt-10">

                {/* <div className="flex flex-col justify-center items-center text-paragraph">
                    
                    <div className="grid grid-cols-12 font-semibold w-full">
                        <h1 className="text-[1.2rem] col-span-2">Product Id</h1>
                        <h1 className="text-[1.2rem] col-span-2">Product Name</h1>
                        <h1 className="text-[1.2rem] col-span-2">Description</h1>
                        <h1 className="text-[1.2rem] col-span-2">Stock</h1>
                        <h1 className="text-[1.2rem] col-span-2">Update</h1>
                        <h1 className="text-[1.2rem] col-span-2">Delete</h1>
                    </div>
                    
                    <div className="grid grid-cols-12 w-full">
                        <p className="text-[1.2rem] col-span-2">1234345</p>
                        <p className="text-[1.2rem] col-span-2">Air Jordan 2</p>
                        <p className="text-[1.2rem] col-span-2">Premium sneakers</p>
                        <p className="text-[1.2rem] col-span-2">30</p>
                        <div className="col-span-2">
                            <Button size='sm'>Update</Button>
                        </div>
                        <div className="col-span-2">
                            <Button size='sm'>Delete</Button>
                        </div>
                    </div>
                </div> */}

                <div >
                    <table className="w-full">
                        <tr className="text-center border border-pink-400 ">
                            <th className="p-2">Product Id</th>
                            <th className="p-2">Product Name</th>
                            <th className="p-2">Description</th>
                            <th className="p-2">Stock</th>
                            <th className="p-2">Update</th>
                            <th className="p-2">Delete</th>
                        </tr>
                        <tr className="text-center border border-pink-400 ">
                            <td className="p-4">1234354</td>
                            <td className="p-4">Air Jordan 2</td>
                            <td className="p-4">Premium sneakers</td>
                            <td className="p-4">30</td>
                            <td className="p-4"><Button size="sm">Update</Button></td>
                            <td className="p-4"><Button size="sm">Delete</Button></td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ManageProducts