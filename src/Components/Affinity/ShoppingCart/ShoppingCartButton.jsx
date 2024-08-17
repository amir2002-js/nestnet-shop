import { PiShoppingBagFill} from "react-icons/pi";

function ShoppingCartButton() {
    return (
        <div className={`border border-gray-300 rounded-lg lg:size-[99px] max-lg:p-1.5 shadow max-lg:bg-primaryDark flex items-center justify-center`} >
            <button className={`flex-col gap-2`}>
                <div className={``}>
                    <PiShoppingBagFill className={`text-primaryDark max-lg:text-white text-2xl`} />
                </div>
                <p className={`max-lg:hidden`}>
                    0
                </p>
            </button>
        </div>
    );
}

export default ShoppingCartButton;