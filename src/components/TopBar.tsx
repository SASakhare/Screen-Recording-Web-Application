import { FaDisplay } from "react-icons/fa6";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const TopBar = () => {
    return (
        <div className="w-screen  bg-black opacity-95 text-white">
            <div className="flex gap-2">
                <div>
                    StudioRecorder
                </div>
                <div className="">
                    <div className="mt-1">
                        <FaDisplay />
                    </div>
                    <div>

                    </div>
                </div>
            </div>

            <div className="">

            </div>
        </div>
    )
}

export default TopBar


const SelectDisplay = () => {
    const items = [
        { label: "Light", value: "light" },
        { label: "Dark", value: "dark" },
        { label: "System", value: "system" },
    ]
    return <div>

        < Select items={items} >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {items.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                            {item.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
    </div>
};