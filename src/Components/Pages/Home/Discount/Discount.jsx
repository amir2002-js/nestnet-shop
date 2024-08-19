import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import {dataSwiper} from "../../../Data/data.js";
import Cart from "../../../Affinity/Cart/Cart.jsx";

export default function Discount() {
    return (
        <div className={`w-[330px] h-[410px] flex justify-center items-center`}>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {dataSwiper.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Cart name={item.name} price={item.price} url={item.url} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};