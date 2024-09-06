import Search from "./Search";
import Select from "./Select";

export default function SearchBar() {
	return (
		<div className="w-full basis-1/4">
			<div className="flex items-center xl:flex-col max-sm:flex-col w-full shadow-md gap-10 bg-slate-200 border-2 p-5 rounded-2xl sticky top-2 border-secondaryDark">
				<Search />

				<Select />
			</div>
		</div>
	);
}
