import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home.jsx";
import Layout from "./Layout.jsx";

function App() {
	return (
		<div className={``}>
			<div dir={`rtl`} className={`font-sans`}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Layout />}>
              <Route path="" element={<Home />} />

            </Route>
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
