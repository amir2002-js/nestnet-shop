import Discount from "./Discount/Discount.jsx";
import Banner from "./Banner/Banner.jsx";
import Access from "./Access/Access.jsx";
import TopProducts from "./TopProducts/TopProducts.jsx";
import NewProducts from "./NewProducts/NewProducts.jsx";
import { useEffect, useState } from "react";
import OffSale from "./OffSale/OffSale.jsx";
import SmBanner from "./SmBanner/SmBanner.jsx";
import TopSale from "./TopSale/TopSale.jsx";
import Headset from "./HeadSet/Headset.jsx";

const Home = () => {
	const [totalWidth, setTotalWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setTotalWidth(window.innerWidth);
		};

		return () => {
			window.addEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className={``}>
			<div>
				{/*banner & carousel*/}
				<div
					className={`flex max-xl:flex-col items-center justify-between gap-10 mt-5`}
				>
					<Banner />
					<Discount />
				</div>

				{/*access*/}
				<div className={`mt-16`}>
					<Access />
				</div>

				{/*top products*/}
				<div className={`mt-14`}>
					<TopProducts totalWidth={totalWidth} />
				</div>

				<div className={`mt-14`}>
					<OffSale totalWidth={totalWidth} />
				</div>

				{/*new products*/}
				<div className={`mt-14`}>
					<NewProducts totalWidth={totalWidth} />
				</div>

				{/*small banners*/}
				<div
					className={`flex items-center justify-between gap-10 mt-14 max-md:flex-col max-md:mx-4`}
				>
					<SmBanner url={"../../src/img/smBanner1.png"} />
					<SmBanner url={"../../src/img/smBanner2.png"} />
				</div>

				{/* most sale */}
				<div className={`mt-14`}>
					<TopSale totalWidth={totalWidth} />
				</div>

				{/* tsco banner */}
				<div className={`mt-20`}>
					<Headset />
				</div>
			</div>
		</div>
	);
};

export default Home;
