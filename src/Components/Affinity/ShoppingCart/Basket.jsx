import { PiXBold } from "react-icons/pi";
import ShowItems from "./ShowItems";

export default function Basket({ changeOpen, isOpen }) {
	return (
		// صفحه باز شده در قسمت سبد خرید
		<div
			className={`${isOpen ? "w-screen bg-black/70" : "w-0 bg-black/0"} z-50 fixed top-0 left-0 transition-colors duration-500 h-screen flex justify-end`}
		>
			{/* خود سبد خرید */}
			<div
				className={`${isOpen ? "transform translate-x-0" : "transform -translate-x-72"} overflow-y-scroll p-5 h-screen w-72 bg-white transition-transform duration-500`}
			>
				{/* بستن سبد خرید */}
				<button
					onClick={() => changeOpen(false)}
					className={`p-2 hover:text-slate-500 transition-all duration-300`}
				>
					<PiXBold className="text-3xl " />
				</button>

				{/* محتوای سبد خرید */}
				<div className="flex w-full items-center justify-center flex-col gap-5">
					<div className="flex items-baseline justify-center gap-1 w-full">
						<div className="bg-primaryLight h-0.5 rounded-full w-full"></div>
						<p className="w-full text-center">سبد خرید</p>
						<div className="bg-primaryLight h-0.5 rounded-full w-full"></div>
					</div>

					{/* آیتم های سبد خرید */}
					<ShowItems />
				</div>
			</div>
		</div>
	);
}
