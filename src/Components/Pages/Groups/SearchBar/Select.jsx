import { group } from "../../../Data/data";
import ButtonSecondary from "../../../Affinity/ButtonSecondary/ButtonSecondary";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Select() {
    const pathname  = useLocation().pathname.split("/");
	const [selectOption, setSelectOption] = useState(pathname[2]== undefined? "all" : pathname[2]);
    const navigation = useNavigate()
    
    useEffect(() => {
        console.log(selectOption);
    },[])
 

    function changeSelectOption(item){
        setSelectOption(item);
    }

    function changePathname(url){
        console.log(url);
        navigation(`products/${url}`)
    }

	return (
		<form
			action=""
			onSubmit={(e) => e.preventDefault()}
			className="w-full shadow flex flex-col gap-5 border border-slate-300 p-4 rounded-2xl"
		>
			<select
                value={selectOption}
                onChange={
                    (e) => changeSelectOption(e.target.value)
                }
				name=""
				id=""
				className="w-full outline-none focus-visible:ring-2 ring-secondaryDark rounded-2xl shadow-lg shadow-black/15 text-sm py-1 px-2"
			>
				<option value="all">همه موارد</option>
				{group.map((item) => (
					<option key={item[1]} value={item[2]}>
						{item[0]}
					</option>
				))}
			</select>

			<ButtonSecondary clickHandler={selectOption == "all"? changePathname("") :() => changePathname(selectOption)}>اعمال فیلتر</ButtonSecondary>
			<button
            onClick={
                () => changeSelectOption("all")
            }
            className="bg-white py-1 text-sm font-peydaBold rounded-2xl border-2 border-secondaryDark hover:bg-secondaryDark hover:text-white transition-all duration-300 ease-in-out">
				حذف فیلتر
			</button>
		</form>
	);
}
