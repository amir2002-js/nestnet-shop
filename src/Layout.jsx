import { Outlet } from "react-router-dom";
import Head from "./Components/Affinity/Header/Head";
import Footer from "./Components/Affinity/Footer/Footer";

export default function Layout() {
	return (
		<div>
			<div className={`container max-w-maxWidth`}>
				<Head />
			</div>

			<Outlet />

			<div className={`mt-20`}>
				<Footer />
			</div>
		</div>
	);
}
