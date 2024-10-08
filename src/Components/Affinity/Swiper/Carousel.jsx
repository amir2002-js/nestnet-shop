import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Cart from "../Cart/Cart.jsx";

function Carousel({ swiperData, numOfShow, id }) {
	return (
		<div className={`flex justify-center items-center w-full`}>
			<button
				className={`swiper-button-prev-${id} p-1 rounded-lg border hover:bg-secondaryLight transition-all duration-500`}
			>
				<GoChevronRight />
			</button>
			<Swiper
				modules={[Navigation]}
				spaceBetween={10}
				slidesPerView={numOfShow}
				navigation={{
					nextEl: `.swiper-button-next-${id}`,
					prevEl: `.swiper-button-prev-${id}`,
				}}
				loop={true}
			>
				{swiperData.map((item) => (
					<SwiperSlide key={item.id}>
						<Cart
							name={item.name}
							price={item.price}
							url={item.url}
							id={item.id}
							type={item.type}
							discount={true}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<button
				className={`swiper-button-next-${id} p-1 rounded-lg border hover:bg-secondaryLight transition-all duration-500`}
			>
				<GoChevronLeft />
			</button>
		</div>
	);
}

export default Carousel;
