import { IoSettingsSharp } from "react-icons/io5";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSettingsStore } from "@/store/settingStore";

const Settings = () => {
    const {
        showCursor,
        highlightClicks,
        fps60,
        toggleShowCursor,
        toggleHighlightClicks,
        toggleFps60,
    } = useSettingsStore();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                render={
                    <button
                        className="
                            w-12 h-12 rounded-full bg-[#24252b] border-none text-white
                            flex items-center justify-center
                            hover:bg-[#2d2d35] transition-colors outline-none
                        "
                    >
                        <IoSettingsSharp className="text-xl" />
                    </button>
                }
            />

            <DropdownMenuContent
                align="end"
                className="w-72 bg-[#0d0d0f] border border-white/10 rounded-xl p-2 text-white"
            >
                <DropdownMenuGroup>
                    <DropdownMenuLabel className="text-gray-400">Recording</DropdownMenuLabel>

                    <DropdownMenuCheckboxItem
                        checked={showCursor}
                        onCheckedChange={toggleShowCursor}
                        className="rounded-lg cursor-pointer focus:bg-[#24252b]"
                    >
                        🖱️ Show Mouse Cursor
                    </DropdownMenuCheckboxItem>

                    <DropdownMenuCheckboxItem
                        checked={highlightClicks}
                        onCheckedChange={toggleHighlightClicks}
                        className="rounded-lg cursor-pointer focus:bg-[#24252b]"
                    >
                        👆 Highlight Mouse Clicks (desktop app only)
                    </DropdownMenuCheckboxItem>

                    <DropdownMenuCheckboxItem
                        checked={fps60}
                        onCheckedChange={toggleFps60}
                        className="rounded-lg cursor-pointer focus:bg-[#24252b]"
                    >
                        🎞️ 60 FPS Recording
                    </DropdownMenuCheckboxItem>

                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                    <DropdownMenuItem
                        onClick={() => window.open("https://github.com/SASakhare/Screen-Recording-Web-Application", "_blank", "noopener,noreferrer")}
                        className="rounded-lg cursor-pointer focus:bg-[#24252b]"
                    >
                        🚀 Check for Updates
                    </DropdownMenuItem>

                    <DropdownMenuItem
                        onClick={() => window.open("https://github.com/SASakhare/Screen-Recording-Web-Application", "_blank", "noopener,noreferrer")}
                        className="rounded-lg cursor-pointer focus:bg-[#24252b]"
                    >
                        ℹ️ About Studio Recorder
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default Settings;