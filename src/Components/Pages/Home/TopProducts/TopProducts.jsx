import {PiArrowLeft} from "react-icons/pi";
import {data} from "../../../Data/data.js";
import Cart from "../../../Affinity/Cart/Cart.jsx";

function TopProducts() {
    return (
        <div className={``}>
            {/*header of this part*/}
            <div className={`flex justify-between gap-px items-center`}>
                <p className={`text-xl line-clamp-1 truncate text-primaryLight font-peydaBold mx-2`}>
                    محصولات منتخب
                </p>
                <span className={`h-px bg-secondaryDark flex-grow`}></span>
                <button className={`mx-2 flex line-clamp-1 truncate items-center justify-center gap-2 text-gray-400 hover:bg-gray-200 rounded-full px-1.5`}>
                    مشاهده بیشتر
                    <PiArrowLeft />
                </button>
            </div>

            {/* top products */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 items-center justify-items-center gap-10 mt-7`}>
                {data.filter(item => {
                    return item.rate > 4
                }).map(item => (
                    <Cart url={item.url} name={item.name} price={item.price} key={item.id}/>
                ))}
            </div>
        </div>
    );
}

export default TopProducts;