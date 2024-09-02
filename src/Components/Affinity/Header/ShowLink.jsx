import { NavLink } from "react-router-dom";

export default function ShowLink({ icon, title, path }) {
	return (
		<li className={`hover:text-primaryLight text-primaryDark`}>
			<NavLink
				to={path}
				className={({ isActive }) => (isActive ? "text-primaryLight" : null)}
			>
				<button className={`flex items-center justify-center gap-2`}>
					{/*icon*/}
					<div>{icon}</div>

					{/*text*/}
					<p>{title}</p>
				</button>
			</NavLink>
		</li>
	);
}
