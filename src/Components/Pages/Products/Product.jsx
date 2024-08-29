import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { data } from "../../Data/data";
import Navbar from "./Nav/Navbar";
import Specifications from "./Specifications/Specifications";

export default function Product() {
	let loc = useLocation();
	const id = loc.state.state;
	const [product, setProduct] = useState(data.find((item) => item.id === id));
	useEffect(() => {
		setProduct(data.find((item) => item.id === id));
	}, [id]);

	return (
		<div>
			<Navbar name={product.name} type={product.type} />
			<Specifications data={product} />
		</div>
	);
}
