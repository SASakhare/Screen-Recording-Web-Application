
import SelectDisplay from "./SelectDisplay";
import AudioSettings from "./AudioSetting";
import Settings from "./Seeting";


const TopBar = () => {
    return (
        <div className="w-screen h-16 text-white px-6 flex items-center justify-between">

            {/*  //* Left Side  */}
            <div className="flex items-center gap-6">

                <div className="flex items-center select-none">

                    <div className="text-2xl font-bold tracking-tight">
                        <span className="text-white">
                            Studio
                        </span>

                        <span
                            className="
                bg-linear-to-r
                from-purple-400
                via-pink-400
                to-blue-400
                bg-clip-text
                text-transparent
            "
                        >
                            Recorder
                        </span>

                    </div>

                    <div
                        className="
            ml-2
            px-2
            py-0.5
            rounded-md
            text-[10px]
            font-semibold
            tracking-wider
            bg-purple-500/20
            text-purple-300
            border
            border-purple-500/30
        "
                    >
                        PRO
                    </div>

                </div>

                <SelectDisplay />

            </div>


            {/*  //* Right Side  */}
            <div className="flex items-center gap-4">
                <AudioSettings />
                <Settings />
            </div>

        </div>
    );
};



export default TopBar;