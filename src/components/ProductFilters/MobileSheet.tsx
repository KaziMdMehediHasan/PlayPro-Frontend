import { Button } from "@/components/ui/button"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react";
import { Slider } from "../ui/slider";
import Filters from "./Filters";

export function MobileSheet() {
    const [sliderValue, setSliderValue] = useState(50);
    const [filterValue, setFilterValue] = useState('');
    return (
        <Sheet key={'left'}>
            <SheetTrigger asChild>
                <Button variant="outline">Filters</Button>
            </SheetTrigger>
            <SheetContent>
                {/* <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>
                        Find products easily
                    </SheetDescription>
                </SheetHeader> */}
                <div className="grid gap-4 py-4">
                    <p className="text-xl">Categories</p>
                    <p className="font-light">Sports Footwear</p>
                    <p className="font-light">Merchandise</p>
                    <p className="font-light">Tennis Items</p>
                    <p className="font-light">Football Items</p>
                    <p className="font-light">Golf Items</p>
                    <p className="font-light">Soccer Items</p>
                    <p className="font-light">Basketball Items</p>
                </div>
                {/* filter */}
                <div className="flex flex-col gap-4">
                    <p className="text-xl">Find by Brand</p>
                    <Filters setFilterValue={setFilterValue} />
                    <p>{filterValue}</p>
                </div>
                {/* price slider */}
                <div className="flex flex-col gap-4">
                    <p className="text-xl">Price Range</p>
                    <div className="flex gap-2">
                        <Slider className="w-44" onValueChange={(e) => setSliderValue(e[0])} defaultValue={[sliderValue]} max={1000} step={10} />
                        <span>{sliderValue}</span>
                    </div>
                </div>

                <div className="my-10">
                    <SheetClose asChild>
                        <Button className="bg-pink-400 hover:bg-pink-500" type="submit">Apply Filter</Button>
                    </SheetClose>
                </div>
                {/* <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Apply changes</Button>
                    </SheetClose>
                </SheetFooter> */}
            </SheetContent>
        </Sheet>
    )
}
