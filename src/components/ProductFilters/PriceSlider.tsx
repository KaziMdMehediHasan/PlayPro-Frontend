import { Slider } from "@/components/ui/slider"
type TSliderProp = {
    value: number;
    maximum: number;
    increment: number;
    className: string;
}

const PriceSlider = ({ className, value, maximum, increment }: TSliderProp) => {
    return <Slider className={className} defaultValue={[value]} max={maximum} step={increment} />
}

export default PriceSlider
