import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home.jsx";
import Layout from "./Layout.jsx";
import Product from "./Components/Pages/Products/Product.jsx";
import ContactUs from "./Components/Pages/ContactUs/ContactUs.jsx";
import About from "./Components/Pages/About/About.jsx";
import Groups from "./Components/Pages/Groups/Groups.jsx";

function App() {
	return (
		<div className={``}>
			<div dir={`rtl`} className={`font-sans`}>
				<BrowserRouter>
					<Routes>
						<Route element={<Layout />}>
							<Route path="/" element={<Home />} />
							<Route path="products?/:group" element={<Groups />} />
							<Route path="products?/:group/:id" element={<Product />} />
							<Route path="contact-us" element={<ContactUs />} />
							<Route path="about-us" element={<About />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
