export default function GroupBtn({
	numberOfBtn,
	numberOfSlice,
	changeNumberOfSlice,
}) {
	let btns = [];
    // بر اساس تعداد ایتم های کل و تعداد ایتم هایی که در صفحع باید نشان داده شود دکمه میسازد
	for (let i = 1; i <= numberOfBtn; ++i) {
		btns.push(
			<button
				className={`size-10 rounded-full ${numberOfSlice == i ? "bg-secondaryDark text-white shadow-md shadow-purple-400" : ""}`}
				onClick={() => {
					changeNumberOfSlice(i);
                    window.scrollTo(0, 0);
				}}
				key={i}
			>
				{i}
			</button>
		);
	}
	return <div className="font-peydaBold">{btns}</div>;
}
