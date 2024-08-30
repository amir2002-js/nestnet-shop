export default function BtnSectionPart({ textInner, clickHandler, isActive }) {
	return (
		<button
			onClick={() => clickHandler()}
			className={`${isActive && "shadow-[0_15px_2px_-13px_#ad49e1]"} w-32 py-2 hover:shadow-[0_15px_2px_-13px_#ad49e1]`}
		>
			{textInner}
		</button>
	);
}
