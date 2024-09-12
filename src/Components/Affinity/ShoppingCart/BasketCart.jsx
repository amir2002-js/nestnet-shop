export default function BasketCart({ title, price, imgURL }) {
	return (
		<div className="w-60 h-32 rounded-md shadow-md shadow-black/20 flex flex-col items-center justify-between p-3">
			<img src={imgURL} alt="" className="h-10" />
			<div className="flex flex-col items-center justify-between">
				<p className="line-clamp-1 truncate text-sm font-sansBold">
					{title}
				</p>
				<p className="text-sm">{price}</p>
			</div>
		</div>
	);
}
