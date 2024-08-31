import ContactWay from "./ContactWay";

export default function ContactUs() {
	return (
		<div className="mb-16">
            {/* form & image */}
			<div className="my-14 flex gap-24">
				{/* form */}
				<div className="w-1/2">
					<h1 className="text-2xl flex gap-2 text-center justify-center">
						<p>فرم تماس با</p>
						<span className="font-peydaBold text-primaryLight">
							نست نت
						</span>
					</h1>
					<form
						action=""
						className="flex flex-col gap-10 mt-12"
						onSubmit={(e) => {
							e.preventDefault();
						}}
					>
						<input
							type="text"
							placeholder="نام"
							className="bg-slate-200 rounded-lg py-2 px-4 outline-none focus-visible:ring-2 ring-secondaryDark w-full"
						/>
						<input
							type="text"
							placeholder="شماره تلفن همراه"
							className="bg-slate-200 rounded-lg py-2 px-4 outline-none focus-visible:ring-2 ring-secondaryDark w-full"
						/>
						<textarea
							placeholder="متن پیام شما"
							className="bg-slate-200 rounded-lg py-2 px-4 outline-none focus-visible:ring-2 h-52 ring-secondaryDark w-full"
						/>
						<button className="bg-secondaryDark text-white font-peydaBold rounded-2xl py-3 text-lg hover:bg-primaryLight">
							ارسال
						</button>
					</form>
				</div>

				{/* image */}
				<div className="w-1/2">
					<img src="../../src/img/contact-us.png" alt="" />
				</div>
			</div>

            {/* contant ways */}
            <ContactWay />
		</div>
	);
}
