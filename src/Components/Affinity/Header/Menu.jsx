import {
	PiCaretUp,
	PiGridFourLight,
	PiHouseLine,
	PiPhoneCall,
	PiSealWarning,
	PiShoppingBag,
} from "react-icons/pi";
import Groups from "./Groups.jsx";
import { useEffect, useState } from "react";
import ShowLink from "./ShowLink.jsx";
import { useLocation } from "react-router-dom";

function Menu({ totalWidth }) {
	const { pathname } = useLocation();

	const [disPlay, setDisPlay] = useState(false);

	useEffect(() => {
		setDisPlay(false);
	}, [pathname]);

	const myLinks = [
		{
			path: "/",
			text: "صفحه اصلی",
			icon: <PiHouseLine className={` text-2xl`} />,
			id: 1,
		},
		{
			path: "products/",
			text: "محصولات",
			icon: <PiShoppingBag className={`text-2xl`} />,
			id: 2,
		},
		{
			path: "about-us",
			text: "درباره ما",
			icon: <PiSealWarning className={`text-2xl`} />,
			id: 3,
		},
		{
			path: "contact-us",
			text: "تماس با ما",
			icon: <PiPhoneCall className={`text-2xl`} />,
			id: 4,
		},
	];

	function showGroups() {
		setDisPlay(!disPlay);
	}

	return (
		<div className={`p-2.5 bg-gray-200 mx-10 rounded-b-lg max-md:hidden`}>
			<ul className={`flex justify-start gap-10`}>
				{/*دسته بندی ها*/}
				<li
					className={`group/li text-primaryDark hover:text-primaryLight *:transition-all *:duration-300`}
				>
					<button
						className={`flex justify-between items-center gap-2`}
						onClick={showGroups}
					>
						{/*icon*/}
						<div>
							<PiGridFourLight className={`text-2xl`} />
						</div>

						{/*text*/}
						<p>دسته بندی ها</p>

						{/*arrow icon*/}
						<PiCaretUp
							className={`${disPlay ? "" : "rotate-180"} transition-all duration-300`}
						/>
					</button>
					{/* groups */}
					<Groups
						totalWidth={totalWidth}
						disPlay={disPlay}
						showGroups={showGroups}
					/>
				</li>
				{myLinks.map((link) => (
					<ShowLink
						key={link.id}
						path={link.path}
						title={link.text}
						icon={link.icon}
					/>
				))}
			</ul>
		</div>
	);
}

export default Menu;
