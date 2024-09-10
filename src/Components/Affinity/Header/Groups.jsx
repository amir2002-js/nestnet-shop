import { useState } from "react";
import { data, group } from "../../Data/data.js";
import CartGroup from "./CartGroup.jsx";

function Groups({ disPlay, totalWidth, showGroups }) {
	// typeNumber
	const [activeGroup, setActiveGroup] = useState(1);

	// all data
	const [products, setProducts] = useState(data);

	return (
		<div
			className={`z-30 absolute ${disPlay ? "" : "hidden"} max-w-maxWidth px-5 h-[350px] mx-auto text-center left-0 right-0`}
		>
			<div
				className={`flex py-8 px-2 max-lg:p-4 items-start justify-evenly text-black  h-[350px] mx-auto w-full top-[10.35rem] rounded-3xl border bg-white border-primaryLight shadow shadow-black/60`}
			>
				{/*نمایش دسته ها*/}
				<div className={`flex flex-col items-start justify-end gap-4`}>
					{group.map((item) => (
						<button
							onClick={() => {
								setActiveGroup(item[1]);
							}}
							key={item[1]}
							className={`w-44 p-2 text-center rounded border-2 border-secondaryDark transition-all duration-500 delay-50 ${activeGroup === item[1] ? "text-secondaryDark bg-white" : "bg-secondaryDark text-white hover:text-secondaryDark hover:bg-white"}`}
						>
							{item[0]}
						</button>
					))}
				</div>

				{/*نمایش محصولات دسته*/}
				<div
					className={`grid max-1xl:grid-cols-2 1xl:grid-cols-3  grid-rows-2 gap-3 justify-items-center`}
				>
					{
						// فیلتر کردن بر اساس دسته
						products
							.filter((product) => {
								return product.typeNumber === activeGroup;
							})
							.slice(0, totalWidth > 1200 ? 6 : 4)
							.map((item) => (
								<button
									key={item.id}
									onClick={() => {
										showGroups(false);
									}}
								>
									<CartGroup dataFiltered={item} />
								</button>
							))
					}
				</div>
			</div>
		</div>
	);
}

export default Groups;
