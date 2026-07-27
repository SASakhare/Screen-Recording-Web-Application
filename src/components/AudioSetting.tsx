import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ImEqualizer } from "react-icons/im";

// * Audio Setting 

const AudioSettings = () => {

    const items = [
        { label: "System Audio", value: "system" },
        { label: "Microphone", value: "microphone" },
        { label: "System + Microphone", value: "both" },
        { label: "Mute", value: "mute" },
    ];

    return (
        <Select>

            <SelectTrigger
                className="
                    w-60
                    h-12
                    rounded-full
                    bg-[#24252b]
                    border-none
                    text-white
                    gap-3
                    focus:ring-0
                    shadow-none
                "
            >
                <ImEqualizer className="text-lg text-white/80" />

                <SelectValue placeholder="Audio Settings" />
            </SelectTrigger>

            <SelectContent
                className="
                    bg-[#0d0d0f]
                    border
                    border-white/10
                    rounded-xl
                    p-2
                    text-white
                "
            >
                <SelectGroup>

                    {items.map((item) => (
                        <SelectItem
                            key={item.value}
                            value={item.value}
                            className="
                                rounded-lg
                                cursor-pointer
                                text-white
                                focus:bg-[#24252b]
                            "
                        >
                            {item.label}
                        </SelectItem>
                    ))}

                </SelectGroup>
            </SelectContent>

        </Select>
    );
};











export default AudioSettings;


