export default function Form() {
	return (
		<div>
			<p className="font-peydaBold text-secondaryDark text-2xl drop-shadow text-center mt-20">
				نظر خود را برای ما بنویسید
			</p>
			<div className="flex gap-20 max-lg:flex-col max-lg:items-center mt-4">
				<form action="" className="flex flex-col gap-7 w-1/2 max-lg:w-10/12 " onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <input type="text" name="" id="" placeholder="نام کاربری" className="w-full shadow-lg bg-slate-200 outline-none focus-visible:ring-4 ring-sky-300 rounded-xl py-1.5 px-6" />
                    <input type="text" name="" id="" placeholder="ایمیل" className="w-full shadow-lg bg-slate-200 outline-none focus-visible:ring-4 ring-sky-300 rounded-xl py-1.5 px-6" />
                    <textarea type="text" name="" id="" className="w-full shadow-lg h-52 bg-slate-200 outline-none focus-visible:ring-4 ring-sky-300 rounded-xl py-1.5 px-6" />
                    <button className="bg-secondaryDark rounded-2xl text-white font-peydaBold p-3">ارسال</button>
                </form>
                <div className="w-1/2 max-lg:w-10/12 ">
                    <img src="../../src/img/sendEmail.png" alt="" className="w-full"/>
                </div>
			</div>
		</div>
	);
}
