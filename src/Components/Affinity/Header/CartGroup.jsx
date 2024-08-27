function CartGroup({ dataFiltered }) {
	//گرفتن داده فیلتر شده

	return (
		<button
			className={`flex justify-center items-center gap-5 rounded-2xl border w-80 h-24 px-5 max-lg:w-72 shadow`}
		>
			<div>
				<img
					src={dataFiltered.url}
					alt={"product img"}
					className={`w-32`}
				/>
			</div>
			<div>
				<p className={`line-clamp-1`}>{dataFiltered.name}</p>
				<p>{dataFiltered.price}</p>
			</div>
		</button>
	);
}

export default CartGroup;
