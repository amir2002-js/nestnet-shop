import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home.jsx";
import Layout from "./Layout.jsx";
import Product from "./Components/Pages/Products/Product.jsx";
import ContactUs from "./Components/Pages/ContactUs/ContactUs.jsx";
import About from "./Components/Pages/About/About.jsx";
import Groups from "./Components/Pages/Groups/Groups.jsx";
import localStorageContext from "./Components/Context/ContextLocalStorage.jsx";
import { useState } from "react";

function App() {
	const [productsId, setProductsId] = useState(
		JSON.parse(localStorage.getItem("products"))
	);

	function addToIds(id) {
		if (productsId === null) {
			localStorage.setItem("products", JSON.stringify([id]));
			console.log(productsId === null);
		} else {
			let ids = [...productsId];
			console.log(ids);
			ids.push(id);
			localStorage.setItem("products", JSON.stringify(ids));
		}
		setProductsId(JSON.parse(localStorage.getItem("products")));
	}

	return (
		<localStorageContext.Provider value={addToIds}>
			<div dir={`rtl`} className={`font-sans`}>
				<BrowserRouter>
					<Routes>
						<Route element={<Layout />}>
							<Route path="/" element={<Home />} />
							<Route
								path="products?/:group"
								element={<Groups />}
							/>
							<Route
								path="products?/:group/:id"
								element={<Product />}
							/>
							<Route path="contact-us" element={<ContactUs />} />
							<Route path="about-us" element={<About />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</div>
		</localStorageContext.Provider>
	);
}

export default App;
