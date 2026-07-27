import { IoSettingsSharp } from "react-icons/io5";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectSeparator,
    SelectTrigger,
} from "@/components/ui/select";

const Settings = () => {
    return (
        <Select>

            <SelectTrigger
                className="
                    w-12
                    h-12
                    rounded-full
                    bg-[#24252b]
                    border-none
                    text-white
                    justify-center
                    focus-visible:ring-0
                    shadow-none
                    hover:bg-[#2d2d35]
                    transition-colors
                "
            >
                <IoSettingsSharp className="text-xl" />
            </SelectTrigger>

            <SelectContent
                className="
                    w-72
                    bg-[#0d0d0f]
                    border
                    border-white/10
                    rounded-xl
                    p-2
                    text-white
                "
            >

                <SelectGroup>
                    <SelectLabel className="text-gray-400">
                        Appearance
                    </SelectLabel>

                    <SelectItem value="dark">
                        🌙 Dark Theme
                    </SelectItem>

                    <SelectItem value="light">
                        ☀️ Light Theme
                    </SelectItem>

                    <SelectItem value="system">
                        💻 System Theme
                    </SelectItem>
                </SelectGroup>

                <SelectSeparator />

                <SelectGroup>
                    <SelectLabel className="text-gray-400">
                        Recording
                    </SelectLabel>

                    <SelectItem value="cursor">
                        🖱️ Show Mouse Cursor
                    </SelectItem>

                    <SelectItem value="clicks">
                        👆 Highlight Mouse Clicks
                    </SelectItem>

                    <SelectItem value="fps">
                        🎞️ 60 FPS Recording
                    </SelectItem>

                    <SelectItem value="countdown">
                        ⏱️ 3 Second Countdown
                    </SelectItem>
                </SelectGroup>

                <SelectSeparator />

                <SelectGroup>
                    <SelectLabel className="text-gray-400">
                        Audio
                    </SelectLabel>

                    <SelectItem value="noise">
                        🎙️ Noise Cancellation
                    </SelectItem>

                    <SelectItem value="echo">
                        🔊 Echo Cancellation
                    </SelectItem>

                    <SelectItem value="volume">
                        🔉 Auto Volume Control
                    </SelectItem>
                </SelectGroup>

                <SelectSeparator />

                <SelectGroup>
                    <SelectLabel className="text-gray-400">
                        General
                    </SelectLabel>

                    <SelectItem value="save-location">
                        📂 Change Save Location
                    </SelectItem>

                    <SelectItem value="shortcuts">
                        ⌨️ Keyboard Shortcuts
                    </SelectItem>

                    <SelectItem value="updates">
                        🚀 Check for Updates
                    </SelectItem>

                    <SelectItem value="about">
                        ℹ️ About Studio Recorder
                    </SelectItem>
                </SelectGroup>

            </SelectContent>

        </Select>
    );
};

export default Settings;