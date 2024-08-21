import {PiArrowLeft} from "react-icons/pi";
import Cart from "../Cart/Cart.jsx";
import Carousel from "../Swiper/Carousel.jsx";
import {useEffect, useState} from "react";

function Event({title , filteredData , idSwiper , totalWidth }) {
    return (
        <div>
            <div className={``}>
                {/*header of this part*/}
                <div className={`flex justify-between gap-px items-center`}>
                    <p className={`text-xl line-clamp-1 truncate text-primaryLight font-peydaBold mx-2`}>
                        {title}
                    </p>
                    <span className={`h-px bg-secondaryDark flex-grow`}></span>
                    <button
                        className={`mx-2 flex line-clamp-1 truncate items-center justify-center gap-2 text-gray-400 hover:bg-gray-200 rounded-full px-1.5`}>
                        مشاهده بیشتر
                        <PiArrowLeft/>
                    </button>
                </div>

                {/* top products */}
                <div className={`w-full flex mt-7`}>
                    <Carousel id={idSwiper} numOfShow={totalWidth >1450? 4 : totalWidth >1200? 3: totalWidth >780? 2:1} swiperData={filteredData} />
                </div>
            </div>
        </div>
    );
}

export default Event;