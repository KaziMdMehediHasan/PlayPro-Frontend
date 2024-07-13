import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type TFilterProps = {
    setFilterValue: React.Dispatch<React.SetStateAction<string>>;
    filterArray: string[];
    title: string;
}

const Filters = ({ setFilterValue, filterArray, title }: TFilterProps) => {
    return (
        <>
            <Select onValueChange={(e) => setFilterValue(e)} >
                <SelectTrigger className="w-[180px] border-2 border-pink-400 focus:ring-0">
                    <SelectValue placeholder={title} />
                </SelectTrigger>
                <SelectContent >
                    {
                        filterArray.map((val, index) => <SelectItem key={index} value={val}>{val.toUpperCase()}</SelectItem>)
                    }
                </SelectContent>
            </Select>
        </>
    )
}

export default Filters;