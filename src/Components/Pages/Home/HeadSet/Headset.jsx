import {PiChairLight} from "react-icons/pi";
import {GoChevronLeft} from "react-icons/go";

function Headset() {
    return (
        <div className={`w-full flex justify-between items-center relative h-32 max-sm:h-64 bg-gradient-to-r from-primaryDark via-violet-500 to-secondaryDark rounded-2xl shadow-[7px_7px_15px_0px_rgba(0,0,0,0.5)]`}>

            {/* image */}
            <img src={"../../src/img/headphones.png"} className={` w-40 absolute -top-14 max-sm:right-0 max-sm:left-0 max-sm:mx-auto`} />


            {/*paragraph*/}
            <div className={`flex flex-col items-start justify-start text-white drop-shadow-md mr-44 max-sm:mt-16 max-sm:mr-8`}>
                <h2 className={`text-2xl font-peydaBold max-md:text-xl`}>
                    تسکو؛ محصول ایرانی با کیفیت بخرید...
                </h2>
                <p className={`max-md:text-sm`}>
                    گزیده ای از بهترین محصولات برند تسکو
                </p>
            </div>

            <div className={`md:ml-16 ml-8 max-sm:mt-16`}>
                <button className={`flex justify-between items-center bg-black gap-1 shadow-[0_0_35px_-10px_white] rounded-full`}>
                    <p className={`rounded-full bg-white px-5 py-1`}>خرید</p>
                    <GoChevronLeft className={`text-white ml-4`} />
                </button>
            </div>
        </div>
    );
}

export default Headset;