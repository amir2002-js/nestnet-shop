import Header from "../../Affinity/Header/Header.jsx";
import ShoppingCartButton from "../../Affinity/ShoppingCart/ShoppingCartButton.jsx";
import Menu from "../../Affinity/Header/Menu.jsx";

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
        </div>
    );
};

export default Home;