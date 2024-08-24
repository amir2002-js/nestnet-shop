import Event2 from "../../../Affinity/Event2/Event2.jsx";
import {data} from "../../../Data/data.js";
import {useState} from "react";

function OffSale({totalWidth}) {
    const [newData, setNewData] = useState(data.filter(item => item.isNew).slice(0,3))
    return (
        <div>
            <div className={`flex justify-center items-center gap-4`}>
                <span className={`h-px bg-primaryLight flex-grow`}></span>
                <p className={`text-lg font-peydaBold text-secondaryDark`}>فروش ویژه</p>
                <span className={`h-px bg-primaryLight flex-grow`}></span>
            </div>
            <Event2 idSwiper={4} filteredData={newData} totalWidth={totalWidth} url={"../../src/img/pic1.png"} />
        </div>
    );
}

export default OffSale;