import { useEffect, useState } from "react";
import { PiMinus, PiPlus } from "react-icons/pi";

export default function Accordion({ item }) {
	const [myClass, setMyClass] = useState("-translate-y-10");
	const [isShow, setIsShow] = useState(false);
	useEffect(() => {
		isShow ? setMyClass("translate-y-0") : setMyClass("-translate-y-10");
	}, [isShow]);

	return (
		<div className="w-full flex flex-col gap-3 transition-all duration-300 bg-gray-300 shadow-lg rounded-md">
			<div className="flex flex-row-reverse w-full transition-all duration-300 shadow-lg shadow-white rounded-md bg-slate-300 justify-between items-center p-4">
				<p>{item.title} </p>
				<button
					onClick={() => setIsShow((prev) => !prev)}
					className="bg-sky-500 shadow-xl shadow-blue-400 p-3 rounded-lg"
				>
					{isShow ? <PiPlus /> : <PiMinus />}
				</button>
			</div>
			{isShow && (
				<div
					className={`${myClass} transition-all duration-300 -bottom-36 p-4 `}
				>
					<p
						className={`w-full text-center font-sansLight p-1.5transition-all duration-200`}
					>
						{item.cap}
					</p>
				</div>
			)}
		</div>
	);
}
