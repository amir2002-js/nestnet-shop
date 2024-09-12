import { Outlet, useLocation } from "react-router-dom";
import Head from "./Components/Affinity/Header/Head";
import Footer from "./Components/Affinity/Footer/Footer";
import { useEffect, useState } from "react";
import Loader from "./Components/Affinity/Loader/Loader";

export default function Layout() {
	const [preLoad, setPreLoad] = useState(true);
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
		window.onload = () => {
			setPreLoad(false);
		};
	}, [pathname]);

	return (
		<div>
			{preLoad ? (
				<Loader />
			) : (
				<>
					<div className={`container max-w-maxWidth`}>
						<Head />
					</div>

					<Outlet />

					<div className={`mt-20`}>
						<Footer />
					</div>
				</>
			)}
		</div>
	);
}
