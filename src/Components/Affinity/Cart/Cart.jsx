import {PiBag} from "react-icons/pi";

function Cart({url , name , price }) {
    return (

        <div className={`flex flex-col h-[400px] justify-between items-center w-80 border border-gray-300 p-5 rounded-2xl gap-4 shadow`}>
            <div className={`flex flex-col items-center gap-2`}>

            <p className={`text-lg`}>
                 تخفیفات ویژه<span className={`text-primaryLight font-sansBold`}> امروز</span>
            </p>

            {/*img*/}
            <img src={url} className={`w-48`}/>

            {/*product Names*/}
            <p className={`line-clamp-1`}>
                {name}
            </p>
            </div>

            <div className={`flex justify-between items-center border-t border-gray-300 w-full pt-3`}>
                {/*icon*/}
                <button className={`p-2 rounded-lg bg-secondaryDark text-white `}>
                    <PiBag className={`text-2xl`} />
                </button>

                {/*price*/}
                <p>
                     {price}   تومان
                </p>
            </div>
        </div>
    );
}

export default Cart;