import { FaLaptop } from "react-icons/fa6";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";



const SelectDisplay = () => {

    const items = [
        { label: "Entire Screen", value: "entire-screen" },
        { label: "Window-1", value: "window-1" },
        { label: "Window-2", value: "window-2" },
        { label: "Window-3", value: "window-3" },
    ];

    const [source, setSource] = useState("");

    return (
        <>
            <Select items={items}>

                <SelectTrigger
                    className="
                w-60
                h-12
                rounded-xl
                bg-[#24252b]
                border-none
                text-white
                outline-none
                focus:ring-0
                gap-3
                "
                >

                    <FaLaptop
                        className="text-purple-400 text-lg"
                    />

                    <SelectValue
                        placeholder="Select Source"
                        className="text-gray-300"
                    />

                </SelectTrigger>


                <SelectContent
                    className="
                bg-black
                border border-white/20
                text-white
                "
                >

                    <SelectGroup>

                        {
                            items.map((item) => (
                                <SelectItem
                                    key={item.value}
                                    value={item.value}
                                    className="
                                        text-white
                                        focus:bg-white/40
                                        cursor-pointer
                                        outline-none
                                        "
                                    onClick={() => setSource(item.label)}
                                >
                                    {item.label}
                                </SelectItem>
                            ))
                        }

                    </SelectGroup>

                </SelectContent>

            </Select>

            {
                source && (
                    <div
                        className="
                                h-8
                                px-3
                                rounded-full
                                bg-[#17151f]
                                border border-purple-500/30
                                flex
                                items-center
                                gap-2
                                text-xs
                                text-purple-300
                                font-semibold
                            "
                    >

                        <div className="w-2 h-2 rounded-full bg-purple-400" />

                        {source.toUpperCase()}

                    </div>
                )
            }
        </>
    );
};


export default SelectDisplay;