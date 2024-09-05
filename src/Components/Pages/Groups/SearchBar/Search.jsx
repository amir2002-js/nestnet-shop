import ButtonSecondary from "../../../Affinity/ButtonSecondary/ButtonSecondary";

export default function Search() {
	return (
		<form className="w-full h-40 justify-evenly shadow flex flex-col gap-5 border border-slate-300 p-4 rounded-2xl">
			<input
				type="text"
				name=""
				id=""
				placeholder="جستجو محصول ..."
				className="text-sm w-full outline-none rounded-xl py-1 px-3 focus-visible:ring-2 shadow-xl shadow-black/15 border border-slate-400 ring-secondaryDark"
			/>
			<ButtonSecondary className="w-full bg-secondaryDark text-white font-peydaBold  rounded-2xl py-1">
				جستجو
			</ButtonSecondary>
		</form>
	);
}
