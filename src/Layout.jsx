import { Outlet, useLocation } from "react-router-dom";
import Head from "./Components/Affinity/Header/Head";
import Footer from "./Components/Affinity/Footer/Footer";
import { useEffect } from "react";

export default function Layout() {
	const { pathname } = useLocation();
	console.log(pathname);

	useEffect(() => {
		window.scrollTo(0 , 0)
		console.log("changed");
	} , [pathname])

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
