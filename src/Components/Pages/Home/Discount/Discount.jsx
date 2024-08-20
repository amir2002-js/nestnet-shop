import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import {dataSwiper} from "../../../Data/data.js";
import Cart from "../../../Affinity/Cart/Cart.jsx";
import {GoChevronLeft, GoChevronRight} from "react-icons/go";
import {Navigation} from "swiper/modules";

export default function Discount() {
    return (
        <div className={`w-[379px] max-sm:w-[320px] h-[410px] mx-auto flex justify-center items-center`}>
            <button className={`swiper-button-prev`}>
                <GoChevronRight />
            </button>
            <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                    nextEl:".swiper-button-next",
                    prevEl:".swiper-button-prev",
                }}
                loop={true}
            >
                {dataSwiper.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Cart name={item.name} price={item.price} url={item.url} discount={true} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className={`swiper-button-next`}>
                <GoChevronLeft />
            </button>
        </div>
    );
};
