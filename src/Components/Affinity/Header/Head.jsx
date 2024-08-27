import Header from "./Header";
import Menu from "./Menu";
import ShoppingCartButton from "../ShoppingCart/ShoppingCartButton";

export default function Head({ totalWidth }) {
	return (
		<div>
			<div
				className={`mt-5 flex items-start justify-between gap-3 w-full`}
			>
				<div className={`flex flex-col w-full`}>
					<Header />
					<Menu totalWidth={totalWidth} />
				</div>
				<span className={`max-lg:hidden`}>
					<ShoppingCartButton />
				</span>
			</div>
		</div>
	);
}
