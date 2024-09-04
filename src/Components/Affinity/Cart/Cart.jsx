import { PiBag } from "react-icons/pi";
import { Link } from "react-router-dom";

function Cart({ url, name, price, discount, id , type }) {
	return (
		<div
			className={`flex flex-col ${discount ? "h-[400px]" : "h-[350px]"} justify-between items-center w-[250px] max-sm:w-72 mx-auto border border-gray-300 p-5 rounded-2xl gap-4 shadow`}
		>
			<Link to={`/products/${type}/${id}`} state={{ state: id }}>
				<div className={`flex flex-col items-center gap-2`}>
					{discount ? (
						<p className={`text-lg`}>
							تخفیفات ویژه
							<span className={`text-primaryLight font-sansBold`}>
								{" "}
								امروز
							</span>
						</p>
					) : null}

					{/*img*/}
					<img
						src={url}
						className={`w-48 ${discount ? "" : "mt-5"}`}
					/>

					{/*product Names*/}
					<p className={`line-clamp-1`}>{name}</p>
				</div>
			</Link>

			{/* footer */}
			<div
				className={`flex justify-between items-center border-t border-gray-300 w-full pt-3`}
			>
				{/*icon*/}
				<button
					className={`p-2 rounded-lg bg-secondaryDark text-white hover:ring-4 ring-secondaryDark/60 hover:bg-white hover:text-secondaryDark transition-all duration-300`}
				>
					<PiBag className={`text-2xl`} />
				</button>

				{/*price*/}
				<p>{price} تومان</p>
			</div>
		</div>
	);
}

export default Cart;
