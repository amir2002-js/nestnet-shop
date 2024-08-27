import React, { useState } from "react";
import { data } from "../../../Data/data.js";
import Event2 from "../../../Affinity/Event2/Event2.jsx";

function TopSale({ totalWidth }) {
	const [newData, setNewData] = useState(
		data.filter((item) => item.isNew).slice(0, 3)
	);
	return (
		<div>
			{/* header */}
			<div className={`flex justify-center items-center gap-4`}>
				<span className={`h-px bg-primaryLight flex-grow`}></span>
				<p className={`text-lg font-peydaBold text-secondaryDark`}>
					پر فروش ترین محصولات
				</p>
				<span className={`h-px bg-primaryLight flex-grow`}></span>
			</div>

			<Event2
				idSwiper={4}
				filteredData={newData}
				totalWidth={totalWidth}
				url={"../../src/img/pic3.png"}
				dir={true}
			/>
		</div>
	);
}

export default TopSale;
