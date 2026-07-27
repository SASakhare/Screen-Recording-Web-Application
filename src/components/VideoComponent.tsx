
const VideoComponent = () => {
    return (
        <div className="grid place-items-center mt-15">
            <div className="text-white flex sm:w-full md:w-170 rounded-2xl h-110 items-center justify-center  bg-amber-400">
                VideoComponent
            </div>
            <div className="mt-4">
                <div
                    className="
                            flex
                            items-center
                            gap-4
                            bg-[#0d0d12]
                            border
                            border-white/10
                            px-6
                            py-3
                            rounded-full
                            shadow-2xl
                        "
                >

                    <div className="flex items-center gap-3 pr-4 border-r border-white/10">

                        <div
                            className="
                                    w-3
                                    h-3
                                    rounded-full
                                    bg-red-500
                                    animate-pulse
                                "
                        />

                        <span className="text-white font-semibold tracking-wider">
                            00:00:00
                        </span>

                    </div>


                    <button
                        title="Start Recording"
                        className="
                            group
                            relative
                            w-12
                            h-12
                            rounded-full
                            bg-purple-400
                            text-black
                            flex
                            items-center
                            justify-center
                            shadow-lg
                            shadow-purple-500/30
                            hover:scale-110
                            transition-all
                        "
                    >
                        <div
                            className="
                            w-4
                            h-4
                            rounded-full
                            border-2
                            border-black
                        "
                        />

                        <span
                            className="
                            absolute
                            top-14
                            hidden
                            group-hover:block
                            bg-black
                            text-white
                            text-xs
                            px-3
                            py-1.5
                            rounded-lg
                            whitespace-nowrap
                            border
                            border-white/10
                        "
                        >
                            Start Recording
                        </span>

                    </button>



                    <button
                        title="Pause Recording"
                        className="
                        group
                        relative
                        w-12
                        h-12
                        rounded-full
                        bg-[#1b1b22]
                        text-white
                        flex
                        items-center
                        justify-center
                        border
                        border-white/10
                        hover:bg-[#292932]
                        transition-all
                    "
                    >

                        <div className="flex gap-1">
                            <div className="w-1 h-4 bg-white rounded" />
                            <div className="w-1 h-4 bg-white rounded" />
                        </div>


                        <span
                            className="
                        absolute
                        top-14
                        hidden
                        group-hover:block
                        bg-black
                        text-white
                        text-xs
                        px-3
                        py-1.5
                        rounded-lg
                        whitespace-nowrap
                        border
                        border-white/10
                    "
                        >
                            Pause Recording
                        </span>

                    </button>



                    <button
                        className="
                    group
                    relative
                    w-12
                    h-12
                    rounded-full
                    bg-[#4a1015]
                    text-white
                    flex
                    items-center
                    justify-center
                    border
                    border-red-500/30
                    hover:bg-[#65151d]
                    transition-all
                "
                    >

                        <div
                            className="
                    w-4
                    h-4
                    bg-red-400
                    rounded-sm
                "
                        />


                        <span
                            className="
                    absolute
                    top-14
                    hidden
                    group-hover:block
                    bg-black
                    text-white
                    text-xs
                    px-3
                    py-1.5
                    rounded-lg
                    whitespace-nowrap
                    border
                    border-white/10
            "
                        >
                            Stop Recording
                        </span>

                    </button>



                    <button
                        className="
                group
                relative
                w-12
                h-12
                rounded-full
                bg-[#1b1b22]
                text-white
                flex
                items-center
                justify-center
                border
                border-white/10
                hover:bg-[#292932]
                transition-all
            "
                    >

                        <span className="text-xl">
                            ☁
                        </span>


                        <span
                            className="
                    absolute
                    top-14
                    hidden
                    group-hover:block
                    bg-black
                    text-white
                    text-xs
                    px-3
                    py-1.5
                    rounded-lg
                    whitespace-nowrap
                    border
                    border-white/10
            "
                        >
                            Save Recording
                        </span>

                    </button>

                </div>
            </div>
        </div>
    )
}

export default VideoComponent