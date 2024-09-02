import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { data } from "../../Data/data";
import Navbar from "./Nav/Navbar";
import Specifications from "./Specifications/Specifications";
import Caption from "./Caption/Caption";

export default function Product() {
	let loc = useLocation();
	const id = loc.state.state;
	const [product, setProduct] = useState(data.find((item) => item.id === id));
	useEffect(() => {
		setProduct(data.find((item) => item.id === id));
	}, [id]);

	return (
		<div className="container max-w-maxWidth">
			<Navbar name={product.name} type={product.type} />
			<Specifications data={product} />
			<Caption data={product} />
		</div>
	);
}
