import Logo from "../Logo/Logo.jsx";
import {CiHeart, CiSearch, CiUser} from "react-icons/ci";

function Header() {
    return (
        <nav className={`border border-gray-300 rounded-lg shadow`}>
            <div className={`flex justify-between items-center p-5`}>

                {/*Logo*/}
                <div>
                    <Logo width={`w-44`} />
                </div>

                {/*form search*/}
                <div className={`flex w-96 justify-center items-center`}>
                    <form className={`border border-gray-300 shadow rounded-xl py-2 px-4 min-w-[100%] flex justify-between items-center`}>
                        <input type={`text`} className={`w-full py-0.5 px2 outline-none`} placeholder={`جستجو محصولات`}/>

                        <button>
                            <CiSearch className={`text-xl`} />
                        </button>
                    </form>
                </div>

                {/*login & favorite list*/}
                <div className={`flex items-center gap-3 `}>

                    {/*icon */}
                    <div className={`p-2 rounded-lg border border-gray-300`}>
                        <CiHeart className={`text-xl`}/>
                    </div>

                    {/*login btn*/}
                    <div>
                        <button className={`py-1.5 px-5 bg-primaryDark text-white rounded-lg flex items-center gap-2`}>
                            ورود | ثب نام
                            <span>
                                <CiUser className={`text-xl`} />
                            </span>
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Header;