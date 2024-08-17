import Header from "../../Affinity/Header/Header.jsx";
import ShoppingCartButton from "../../Affinity/ShoppingCart/ShoppingCartButton.jsx";
import Menu from "../../Affinity/Header/Menu.jsx";
import Discount from "./Discount/Discount.jsx";
import Banner from "./Banner/Banner.jsx";
import Access from "./Access/Access.jsx";

const Home = () => {
    return (
        <div>
            {/*head*/}
            <div className={`mt-5 flex items-start justify-between gap-3 w-full`}>
                <div className={`flex flex-col w-full`}>
                <Header />
                <Menu />
                </div>
                <span className={`max-lg:hidden`}>
                    <ShoppingCartButton />
                </span>
            </div>

            <div className={`flex max-xl:flex-col items-center justify-between gap-10 mt-5`}>
                <Banner />
                <Discount />
            </div>

            <div className={`mt-16 mb-96`}>
                <Access />
            </div>
        </div>
    );
};

export default Home;