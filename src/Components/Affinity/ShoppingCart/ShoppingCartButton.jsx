import { useState } from "react";
import { PiShoppingBagFill } from "react-icons/pi";
import Basket from "./Basket";

function ShoppingCartButton() {
	const [isOpen, setIsOpen] = useState(false);

	function onClickHandler() {
		setIsOpen(!isOpen);
	}

	return (
		<>
			<button
				onClick={() => onClickHandler()}
				className={`border border-gray-300 rounded-lg lg:size-[99px] max-lg:p-1.5 shadow max-lg:bg-primaryDark flex items-center justify-center`}
			>
				<span className={`flex-col gap-2`}>
					<div className={``}>
						<PiShoppingBagFill
							className={`text-primaryDark max-lg:text-white text-2xl md:text-3xl`}
						/>
					</div>
					<p className={`max-lg:hidden`}>0</p>
				</span>
			</button>
			<Basket changeOpen={setIsOpen} isOpen={isOpen} />
		</>
	);
}

export default ShoppingCartButton;
