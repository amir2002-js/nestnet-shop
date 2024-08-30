import Accordion from "./Accordion";

export default function Test() {
	const test = [
		{
			id: 1,
			title: "Lorem ipsum dolor sit amet consectetur,",
			cap: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, a voluptatibus blanditiis aut laborum qui ducimus quod ipsam beatae! Doloremque minima dolor, tenetur corporis porro ullam adipisci illo officiis pariatur?",
		},
		{
			id: 2,
			title: "Lorem ipsum dolor sit amet consectetur,",
			cap: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, a voluptatibus blanditiis aut laborum qui ducimus quod ipsam beatae! Doloremque minima dolor, tenetur corporis porro ullam adipisci illo officiis pariatur?",
		},
		{
			id: 3,
			title: "Lorem ipsum dolor sit amet consectetur,",
			cap: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, a voluptatibus blanditiis aut laborum qui ducimus quod ipsam beatae! Doloremque minima dolor, tenetur corporis porro ullam adipisci illo officiis pariatur?",
		},
	];

	return (
		<div className="flex flex-col w-[50%] gap-10 justify-between items-center mx-auto">
			{test.map((item) => (
				<Accordion item={item} key={item.id} />
			))}
		</div>
	);
}
