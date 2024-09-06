import { Link } from "react-router-dom";

export default function ButtonSecondary({children , url}) {
	return (
		<Link to={url}
        className="w-full bg-secondaryDark text-white font-peydaBold  rounded-2xl py-1 text-center">
			{children}
		</Link>
	);
}
