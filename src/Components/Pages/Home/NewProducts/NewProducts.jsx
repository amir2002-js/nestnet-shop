import Event from "../../../Affinity/Event/Event.jsx";
import {data} from "../../../Data/data.js";

function NewProducts(props) {
    const newData = data.filter(item => {
        return item.isNew;
    })
    return (
        <div>
            <Event idSwiper={2} title={"محصولات جدید"} filteredData={newData} />
        </div>
    );
}

export default NewProducts;