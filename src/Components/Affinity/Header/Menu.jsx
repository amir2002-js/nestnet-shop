import {
	PiCaretUp,
	PiFileText,
	PiGridFourLight,
	PiHouseLine,
	PiPhoneCall,
	PiSealWarning,
} from "react-icons/pi";
import Groups from "./Groups.jsx";
import { useState } from "react";

function Menu({ totalWidth }) {
	const [disPlay, setDisPlay] = useState(false);

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
					<Groups totalWidth={totalWidth} disPlay={disPlay} />
				</li>

				{/*صفحه اصلی*/}
				<li className={`hover:text-primaryLight text-primaryDark`}>
					<button
						className={`flex items-center justify-center gap-2`}
					>
						{/*icon*/}
						<div>
							<PiHouseLine className={` text-2xl`} />
						</div>

						{/*text*/}
						<p>صفحه اصلی</p>
					</button>
				</li>

				{/*وبلاگ*/}
				<li className={`hover:text-primaryLight text-primaryDark`}>
					<button
						className={`flex items-center justify-center gap-2`}
					>
						{/*icon*/}
						<div>
							<PiFileText className={`text-2xl`} />
						</div>

						{/*text*/}
						<p>وبلاگ</p>
					</button>
				</li>

				{/*درباره ما*/}
				<li className={`hover:text-primaryLight text-primaryDark `}>
					<button
						className={`flex items-center justify-center gap-2`}
					>
						{/*icon*/}
						<div>
							<PiSealWarning className={`text-2xl`} />
						</div>

						{/*text*/}
						<p>درباره ما</p>
					</button>
				</li>

				{/*تماس با ما*/}
				<li className={`hover:text-primaryLight text-primaryDark `}>
					<button
						className={`flex items-center justify-center gap-2`}
					>
						{/*icon*/}
						<div>
							<PiPhoneCall className={`text-2xl`} />
						</div>

						{/*text*/}
						<p>تماس با ما</p>
					</button>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
