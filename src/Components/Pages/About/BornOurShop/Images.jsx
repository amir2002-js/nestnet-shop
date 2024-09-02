export default function Images() {
	return (
		<div className="relative">
			<img src="../../src/img/teamWork1.png" className="rounded-2xl shadow-xl shadow-black/60" />
			<div className="absolute flex flex-row-reverse items-center justify-evenly -bottom-20">
				<img src="../../src/img/teamWork3.jpg" className="w-[40%] shadow-xl shadow-white rounded-lg" />
				<img src="../../src/img/teamWork2.jpg" className="w-[25%] shadow-xl shadow-white rounded-lg" />
				<img src="../../src/img/teamWork4.jpg" className="w-[25%] shadow-xl shadow-white rounded-lg" />
			</div>
		</div>
	);
}
