import {data} from "../../../Data/data.js";
import Event from "../../../Affinity/Event/Event.jsx";

function TopProducts() {

    const newData = data.filter(item => {
        return item.rate > 4 ;
    })

    return (
        <Event idSwiper={1} title={"محصولات منتخب"} filteredData={newData} />
    )
}

export default TopProducts;