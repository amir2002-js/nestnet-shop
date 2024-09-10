import { PiBag } from "react-icons/pi";

export default function AddToBasketBtn({ id }) {
	return (
		<button
			onClick={() => console.log(id)}
			className={`p-2 rounded-lg bg-secondaryDark text-white hover:ring-4 ring-secondaryDark/60 hover:bg-white hover:text-secondaryDark transition-all duration-300`}
		>
			<PiBag className={`text-2xl`} />
		</button>
	);
}
