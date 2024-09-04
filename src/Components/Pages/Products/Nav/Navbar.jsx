import { Link } from "react-router-dom";

export default function Navbar({type , name}) {
  return (
    <div className="shadow-[5px_5px_15px_-5px_#ad49e1] my-12 odd:text-slate-100 text-white font-peydaBold bg-primaryLight w-full px-7 py-3.5 rounded-2xl">
        <ul className="flex gap-4">
            <Link to={'/'} className="hover:text-white hover:drop-shadow-black transition-all duration-300">خانه</Link>
            <span className="bg-gray-300 w-[1.5px] h-6"></span>
            <Link to={`/products/${type}/`} className="hover:text-white hover:drop-shadow-black transition-all duration-300">{type}</Link>
            <span className="bg-gray-300 w-[1.5px] h-6"></span>
            <button className="hover:text-white hover:drop-shadow-black transition-all duration-300">{name}</button>
        </ul>
    </div>
  )
}
