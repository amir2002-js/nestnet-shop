import { useLocation } from "react-router-dom";
import { data } from "../../Data/data";
import Cart from "../../Affinity/Cart/Cart";
import SearchBar from "./SearchBar/SearchBar";
import GroupBtn from "./GroupBtn/GroupBtn";
import { useEffect, useState } from "react";

export default function Groups() {
	const { pathname } = useLocation();
	const myData = data;
	const typeGetter = pathname.split("/")[2];
	const filteredData = myData.filter((data) =>
		typeGetter == "" ? true : data.type == typeGetter
	);
	const maxItem = 12;
	const [numberOfSlice , setNumberOfSlice] = useState(1);

	useEffect(() => {
		changeNumberOfSlice(1)
	},[pathname])

	function changeNumberOfSlice(num){
		setNumberOfSlice(num)
	}

	// حساب کردن تعداد btn
	let numOfBtn = Math.floor(filteredData.length / maxItem);
	filteredData % maxItem == 0 ? null : numOfBtn++;

	return (
		<div className="flex max-xl:flex-col gap-y-12 max-w-maxWidth container justify-evenly my-20">
			<div className="flex flex-col justify-between items-center gap-12 w-10/12 max-xl:w-full order-last">
				<div className="grid flex-grow lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full justify-between justify-items-center gap-y-8">
					{/* نمایش هر محصول از دسته */}
					{filteredData.slice((numberOfSlice-1)*maxItem , numberOfSlice*maxItem).map((item) => (
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
				{/* ساخت btn */}
				<GroupBtn numberOfBtn={numOfBtn} numberOfSlice={numberOfSlice} changeNumberOfSlice={changeNumberOfSlice}/>
			</div>
			{/* قسمت سرچ در محصولات */}
			<SearchBar />
		</div>
	);
}
