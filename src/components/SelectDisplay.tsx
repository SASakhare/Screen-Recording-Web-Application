import { FaLaptop } from "react-icons/fa6";
import { useRecorderStore } from "@/store/recoderStore";
import { startRecording } from "@/engine/recorderEngine";

// ─────────────────────────────────────────────────────────────
// ELECTRON VERSION (commented out — reactivate when porting to Electron)
// On web, getDisplayMedia() only shows the native picker when you actually
// start recording — you can't pre-list real windows/screens yourself.
// In Electron, desktopCapturer.getSources() gives you a REAL list of
// screens/windows with thumbnails, so this dropdown becomes a genuine
// pre-selection step instead of just a trigger/badge.
// ─────────────────────────────────────────────────────────────
//
// import {
//     Select,
//     SelectContent,
//     SelectGroup,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select";
// import { useState } from "react";
//
// const SelectDisplayElectron = () => {
//     const items = [
//         { label: "Entire Screen", value: "entire-screen" },
//         { label: "Window-1", value: "window-1" },
//         { label: "Window-2", value: "window-2" },
//         { label: "Window-3", value: "window-3" },
//     ];
//     // In Electron, replace hardcoded `items` above with:
//     // const [items, setItems] = useState([]);
//     // useEffect(() => {
//     //   window.electronAPI.getSources().then(setItems);
//     // }, []);
//
//     const [source, setSource] = useState("");
//
//     return (
//         <>
//             <Select items={items}>
//                 <SelectTrigger
//                     className="w-60 h-12 rounded-xl bg-[#24252b] border-none text-white outline-none focus:ring-0 gap-3"
//                 >
//                     <FaLaptop className="text-purple-400 text-lg" />
//                     <SelectValue placeholder="Select Source" className="text-gray-300" />
//                 </SelectTrigger>
//
//                 <SelectContent className="bg-black border border-white/20 text-white">
//                     <SelectGroup>
//                         {items.map((item) => (
//                             <SelectItem
//                                 key={item.value}
//                                 value={item.value}
//                                 className="text-white focus:bg-white/40 cursor-pointer outline-none"
//                                 onClick={() => setSource(item.label)}
//                             >
//                                 {item.label}
//                             </SelectItem>
//                         ))}
//                     </SelectGroup>
//                 </SelectContent>
//             </Select>
//
//             {source && (
//                 <div className="h-8 px-3 rounded-full bg-[#17151f] border border-purple-500/30 flex items-center gap-2 text-xs text-purple-300 font-semibold">
//                     <div className="w-2 h-2 rounded-full bg-purple-400" />
//                     {source.toUpperCase()}
//                 </div>
//             )}
//         </>
//     );
// };

// ─────────────────────────────────────────────────────────────
// WEB VERSION (active) — button triggers the native getDisplayMedia picker,
// badge shows what was actually picked after the fact.
// ─────────────────────────────────────────────────────────────

const SelectDisplay = () => {
    const selectedSource = useRecorderStore((s) => s.selectedSource);
    const status = useRecorderStore((s) => s.status);

    const isBusy = status === "recording" || status === "paused" || status === "selecting";

    return (
        <div className="flex items-center gap-3">
            <button
                onClick={startRecording}
                disabled={isBusy}
                className="
                    w-60 h-12 rounded-xl bg-[#24252b] border-none text-white
                    outline-none flex items-center gap-3 px-4
                    hover:bg-[#2c2d34] transition-all disabled:opacity-40
                "
            >
                <FaLaptop className="text-purple-400 text-lg" />
                <span className="text-gray-300">
                    {selectedSource ? selectedSource.label : "Select Source"}
                </span>
            </button>

            {selectedSource && (
                <div
                    className="
                        h-8 px-3 rounded-full bg-[#17151f] border border-purple-500/30
                        flex items-center gap-2 text-xs text-purple-300 font-semibold
                    "
                >
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                    {selectedSource.label.toUpperCase()}
                </div>
            )}
        </div>
    );
};

export default SelectDisplay;