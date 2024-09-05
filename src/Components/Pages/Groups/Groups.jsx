import { useLocation } from "react-router-dom";
import { data } from "../../Data/data";
import Cart from "../../Affinity/Cart/Cart";
import SearchBar from "./SearchBar/SearchBar";

export default function Groups() {
	const { pathname } = useLocation();
	const mydata = data;
	const typeGetter = pathname.split("/")[2];
	const filteredData = mydata.filter((data) => data.type == typeGetter);

	return (
		<div className="flex max-xl:flex-col  max-w-maxWidth container justify-between my-20">
			<div className="grid flex-grow lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-between justify-items-center gap-y-8 max-xl:order-last">
				{/* نمایش هر محصول از دسته */}
				{filteredData.map((item) => (
					<Cart
						key={item.id}
						name={item.name}
						price={item.price}
						url={item.url}
						id={item.id}
						type={item.type}
						discount={false}
					/>
				))}
			</div>
			<SearchBar />
		</div>
	);
}
