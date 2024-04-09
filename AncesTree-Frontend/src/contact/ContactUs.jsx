import react from "react";

export default function ContactUs() {
    return(
        <div className="h-screen w-screen flex flex-col justify-around items-start">
            <div className="grid grid-cols-2 gap-x-10">

            <div className="pl-8 h-[200px] w-[500px] border-[1px] font-IBM-Plex-Mono border-black border-dashed rounded-3xl flex flex-col justify-evenly">
                <div className="text-[40px] font-semibold">Johncy K. John</div>
                <div className="text-[20px] font-semibold text-[#676767]">Kattoor Kudumbayogam President</div>
                <div className="text-[20px] font-medium">Phone: +919495126184</div>
            </div>
            <div className="pl-8 h-[200px] w-[500px] border-[1px] font-IBM-Plex-Mono border-black border-dashed rounded-3xl flex flex-col justify-evenly">
                <div className="text-[40px] font-semibold">K. A. Joseph</div>
                <div className="text-[20px] font-semibold text-[#676767]">Treasurer - Kattoor Kudumbayogam</div>
                <div className="text-[20px] font-medium">Phone: +919446387034</div>
            </div>
            </div>

        </div>
    )
}