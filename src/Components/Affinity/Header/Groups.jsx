import {data , group} from "../../Data/data.js";
import {useState} from "react";
import CartGroup from "./CartGroup.jsx";

function Groups({disPlay}) {
    const [activeGroup, setActiveGroup] = useState(1);
    const [products, setProducts] = useState(data);
    return (
        <div className={`z-30 p-8 absolute ${disPlay? "" : "hidden"} flex items-start justify-evenly mx-auto text-black left-0 right-0 h-[350px] container top-[10.35rem] rounded border bg-white border-primaryLight shadow shadow-black/60`}>

            {/*نمایش دسته ها*/}
            <div className={`flex flex-col items-start justify-end gap-4`}>
                {group.map((item) => (
                    <button
                        onClick={() => {
                            setActiveGroup(item[1])
                        }}
                        key={item[1]} className={`w-48 p-2 text-center rounded border-2 border-secondaryDark transition-all duration-500 delay-50 ${activeGroup === item[1]? "text-secondaryDark bg-white" : "bg-secondaryDark text-white hover:text-secondaryDark hover:bg-white"}`}>
                        {item[0]}
                    </button>
                ))}
            </div>

            {/*نمایش محصولات دسته*/}
            <div className={`grid grid-cols-3 gap-10 justify-items-center`}>
                {
                    // فیلتر کردن بر اساس دسته
                    products.filter((product) =>{
                        return product.typeNumber === activeGroup;
                    })
                        .map((item,index) =>
                            (<CartGroup dataFiltered={item} key={item.id}/>)

                    )
                }
            </div>
        </div>
    );
}

export default Groups;