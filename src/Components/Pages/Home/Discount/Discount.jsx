// Import Swiper styles
import 'swiper/css';
import {dataSwiper} from "../../../Data/data.js";
import Carousel from "../../../Affinity/Swiper/Carousel.jsx";

export default function Discount() {
    return (
        <div className={`w-[379px] max-sm:w-[320px] h-[410px] mx-auto flex justify-center items-center`}>
            <Carousel id={0} swiperData={dataSwiper} numOfShow={1} />
        </div>
    );
};
