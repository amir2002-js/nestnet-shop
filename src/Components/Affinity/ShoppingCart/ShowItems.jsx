import { useState } from "react";
import { data } from "../../Data/data";
import BasketCart from "./BasketCart";

export default function ShowItems() {
	const [ids, setIds] = useState(
		JSON.parse(localStorage.getItem("products"))
	);

	const datas = data;
	const itemsOfBuy = datas.filter((item) => {
		if (ids === null) {
			return false;
		}
		return ids.includes(item.id);
	});

	console.log(itemsOfBuy);
	return (
		<div className="flex flex-col gap-5">
			{itemsOfBuy.map((item) => (
				<BasketCart
					key={item.id}
					title={item.name}
					price={item.price}
					imgURL={item.url}
				/>
			))}
		</div>
	);
}
