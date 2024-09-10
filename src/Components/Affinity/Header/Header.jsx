import Logo from "../Logo/Logo.jsx";
import {
	PiHeart,
	PiList,
	PiListBold,
	PiMagnifyingGlass,
	PiUser,
} from "react-icons/pi";
import ShoppingCartButton from "../ShoppingCart/ShoppingCartButton.jsx";

function Header() {
	return (
		<nav
			className={`bg-white border border-gray-300 rounded-lg shadow w-full`}
		>
			<div className={`flex justify-between items-center p-5 gap-10`}>
				{/*berger menu*/}
				<button className={`hidden max-md:block`}>
					<PiListBold className={`text-primaryDark text-2xl `} />
				</button>

				{/*Logo*/}
				<div>
					<Logo width={`w-44`} />
				</div>

				{/*form search*/}
				<div
					className={`flex max-w-[700px] max-md:hidden justify-center items-center flex-grow`}
				>
					<form
						className={`border border-gray-300 shadow rounded-xl py-2 px-4 min-w-[100%] flex justify-between items-center`}
					>
						<input
							type={`text`}
							className={`w-full py-0.5 px2 outline-none`}
							placeholder={`جستجو محصولات`}
						/>

						<button>
							<PiMagnifyingGlass className={`text-2xl`} />
						</button>
					</form>
				</div>

				{/*login & favorite list*/}
				<div className={`flex items-center gap-3 `}>
					{/*shopping cart button*/}
					<span className={`lg:hidden`}>
						<ShoppingCartButton />
					</span>

					{/*heart icon */}
					<div
						className={`p-2 rounded-lg border border-gray-300  max-md:hidden`}
					>
						<PiHeart className={`text-2xl`} />
					</div>

					{/*login btn*/}
					<div>
						<button
							className={`max-md:p-1.5 py-2 px-5 bg-primaryDark text-white rounded-lg flex items-center gap-2`}
						>
							<p
								className={`max-md:hidden line-clamp-1 tracking-tight truncate`}
							>
								ورود | ثبت نام
							</p>
							<span>
								<PiUser className={`text-2xl`} />
							</span>
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Header;
