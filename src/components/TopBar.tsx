
import SelectDisplay from "./SelectDisplay";
import AudioSettings from "./AudioSetting";
import Settings from "./Seeting";


const TopBar = () => {
    return (
        <div className="w-screen h-16 bg-black/95 text-white px-6 flex items-center justify-between">

            {/*  //* Left Side  */}
            <div className="flex items-center gap-6">

                <div className="text-lg font-semibold">
                    StudioRecorder
                </div>

                <SelectDisplay />

            </div>


            {/*  //* Right Side  */}
            <div className="flex items-center gap-4">
                <AudioSettings />
                <Settings/>
            </div>

        </div>
    );
};



export default TopBar;