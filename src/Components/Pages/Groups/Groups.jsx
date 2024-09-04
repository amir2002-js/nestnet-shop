import { useLocation } from "react-router-dom";
import { data } from "../../Data/data";
import Cart from "../../Affinity/Cart/Cart";

export default function Groups() {
	const { pathname } = useLocation();
	const mydata = data;
	const typeGetter = pathname.split("/")[2];
	const filteredData = mydata.filter((data) => data.type == typeGetter);

	console.log(filteredData);

	return (
		<div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-8 my-20 max-w-maxWidth container ">
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
	);
}
