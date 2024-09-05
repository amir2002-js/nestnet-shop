export default function ButtonSecondary({children , clickHandler}) {
	return (
		<button onClick={(e) => clickHandler(e.target.value)}
        className="w-full bg-secondaryDark text-white font-peydaBold  rounded-2xl py-1">
			{children}
		</button>
	);
}
