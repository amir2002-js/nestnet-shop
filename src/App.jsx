import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home.jsx";
import Layout from "./Layout.jsx";
import Product from "./Components/Pages/Products/Product.jsx";
import Test from "./Components/Pages/Test/Test.jsx";

function App() {
	return (
		<div className={``}>
			<div dir={`rtl`} className={`font-sans`}>
				<BrowserRouter>
					<Routes>

						<Route element={<Layout />}>
							<Route path="/" element={<Home />} />
							<Route path="products?/:id" element={<Product />} />
						</Route>
							<Route path="test" element={<Test />} />

					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
