import Header from "../../Affinity/Header/Header.jsx";
import ShoppingCartButton from "../../Affinity/ShoppingCart/ShoppingCartButton.jsx";

const Home = () => {
    return (
        <div>
            {/*head*/}
            <div className={`mt-5 flex items-center justify-between gap-3 w-full`}>
                <Header />
                <span className={`max-lg:hidden`}>
                    <ShoppingCartButton />
                </span>
            </div>
        </div>
    );
};

export default Home;