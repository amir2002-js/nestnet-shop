import Carousel from "../Swiper/Carousel.jsx";
import Cart from "../Cart/Cart.jsx";

function Event2({ filteredData, totalWidth, url, dir }) {
	return (
		<div
			className={`max-w-maxWidth grid lg:grid-cols-4 grid-cols-1 justify-between items-center gap-4 mt-7`}
			dir={dir ? "ltr" : null}
		>
			<div className={`flex items-center justify-center`}>
				<img
					src={url}
					alt="img"
					className={` max-xmd:px-12 w-96 col-span-1`}
				/>
			</div>

			<div
				className={`items-center justify-between gap-4 hidden 2xl:flex col-span-3`}
			>
				{filteredData.map((item) => (
					<Cart
						key={item.id}
						id={item.id}
						name={item.name}
						price={item.price}
						url={item.url}
						type={item.type}
					/>
				))}
			</div>

			<div
				className={`2xl:hidden w-full flex col-span-3`}
				dir={dir ? "rtl" : null}
			>
				<Carousel
					id={5}
					swiperData={filteredData}
					numOfShow={totalWidth > 770 ? 2 : 1}
				/>
			</div>
		</div>
	);
}

export default Event2;
