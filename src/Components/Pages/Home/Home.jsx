import Header from "../../Affinity/Header/Header.jsx";
import ShoppingCartButton from "../../Affinity/ShoppingCart/ShoppingCartButton.jsx";
import Menu from "../../Affinity/Header/Menu.jsx";
import Discount from "./Discount/Discount.jsx";
import Banner from "./Banner/Banner.jsx";
import Access from "./Access/Access.jsx";
import TopProducts from "./TopProducts/TopProducts.jsx";
import NewProducts from "./NewProducts/NewProducts.jsx";
import {useEffect, useState} from "react";
import OffSale from "./OffSale/OffSale.jsx";

const Home = () => {
    const [totalWidth , setTotalWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setTotalWidth(window.innerWidth);
        }

        return () =>{
            window.addEventListener("resize" , handleResize)
        }
    } , [])

    return (
        <div className={`mb-96`}>
            {/*head*/}
            <div className={`mt-5 flex items-start justify-between gap-3 w-full`}>
                <div className={`flex flex-col w-full`}>
                <Header />
                <Menu totalWidth={totalWidth} />
                </div>
                <span className={`max-lg:hidden`}>
                    <ShoppingCartButton />
                </span>
            </div>

            {/*banner & carousel*/}
            <div className={`flex max-xl:flex-col items-center justify-between gap-10 mt-5`}>
                <Banner />
                <Discount />
            </div>

            {/*access*/}
            <div className={`mt-16`}>
                <Access />
            </div>

            {/*top products*/}
            <div className={`mt-14`}>
                <TopProducts totalWidth={totalWidth} />
            </div>

            <div className={`mt-14`}>
                <OffSale totalWidth={totalWidth} />
            </div>

            {/*new products*/}
            <div className={`mt-14`}>
                <NewProducts totalWidth={totalWidth} />
            </div>
        </div>
    );
};

export default Home;