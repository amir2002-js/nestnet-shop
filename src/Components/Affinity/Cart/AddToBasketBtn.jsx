import { useContext } from "react";
import { PiBag } from "react-icons/pi";
import localStorageContext from "../../Context/ContextLocalStorage";

export default function AddToBasketBtn({ id }) {
	const x = useContext(localStorageContext)

	return (
		<button
			onClick={() => x(id)}
			className={`p-2 rounded-lg bg-secondaryDark text-white hover:ring-4 ring-secondaryDark/60 hover:bg-white hover:text-secondaryDark transition-all duration-300`}
		>
			<PiBag className={`text-2xl`} />
		</button>
	);
}
