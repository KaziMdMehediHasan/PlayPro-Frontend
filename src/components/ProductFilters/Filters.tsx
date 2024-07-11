import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const Filters = ({ setFilterValue }) => {
    const brands = ['all', 'nike', 'adidas', 'puma', 'rebook', 'new balance', 'lacoste', 'champion', 'wilson', 'yonex']
    return (
        <>
            <Select onValueChange={(e) => setFilterValue(e)} >
                <SelectTrigger className="w-[180px] border-2 border-pink-400 focus:ring-0">
                    <SelectValue placeholder="Brand" />
                </SelectTrigger>
                <SelectContent >
                    {
                        brands.map((brand) => <SelectItem value={brand}>{brand.toUpperCase()}</SelectItem>)
                    }
                </SelectContent>
            </Select>
        </>
    )
}

export default Filters;