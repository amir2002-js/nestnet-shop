import {
	LiaBoxSolid,
	LiaDropbox,
	LiaShieldAltSolid,
	LiaShippingFastSolid,
} from "react-icons/lia";

export default function Specifications({ data }) {
	return (
		<div className="w-full flex max-2xl:flex-col gap-10 rounded-lg p-5 items-center justify-center">
			{/* image */}
			<div className="basis-5/12 flex items-center">
				<img src={data.url} alt="" />
			</div>

			{/* Description */}
			<div className="bg-slate-200 h-full w-full max-lg:flex-col rounded-3xl p-7 flex gap-4 justify-between shadow-lg shadow-black/20 ">
				{/* caption */}
				<div className="flex flex-col max-lg:items-center gap-4">
					{/* product name */}
					<h1 className="text-primaryLight font-sans text-lg pb-4 w-full tracking-tighter border-b border-slate-400">
						{data.name}
					</h1>

					{/* cap */}
					<div className="flex flex-col flex-grow gap-5">
						<p className="text-xl text-primaryLight font-peydaBold">توضیحات محصول</p>
						<ul className="mr-5 flex flex-col justify-between h-full max-lg:gap-6 font-sansLight text-sm">
							<li>ظرفیت : ۲ ترابایت</li>
							<li>نوع حافظه : قابل حمل</li>
							<li>نوع اتصال : باسیم</li>
							<li>نوع رابط : USB ۳.۱</li>
							<li>مقاوم در برابر آب : بله</li>
						</ul>
					</div>
				</div>

				{/* buy */}
				<div className="w-full h-full p-7 bg-white basis-5/12 rounded-3xl shadow-lg shadow-black/20 text-gray-500">
					<ul className="flex flex-col justify-between h-full *:p-2">
						<li className="flex gap-2 hover:text-secondaryDark transition-all duration-300 hover:cursor-pointer">
							<span>
								<LiaShippingFastSolid className="text-2xl" />
							</span>
							<p>ارسال توسط فروشگاه</p>
						</li>
						<li className="flex gap-2 hover:text-secondaryDark transition-all duration-300 hover:cursor-pointer">
							<span>
								<LiaShieldAltSolid className="text-2xl" />
							</span>
							<p>گارانتی اصالت و سلامت فیزیکی کالا</p>
						</li>
						<li className="flex gap-2 hover:text-secondaryDark transition-all duration-300 hover:cursor-pointer">
							<span>
								<LiaBoxSolid className="text-2xl" />
							</span>
							<p>هزینه حمل به عهده خریدار</p>
						</li>
						<li className="flex gap-2 hover:text-secondaryDark transition-all duration-300 hover:cursor-pointer">
							<span>
								<LiaDropbox className="text-2xl" />
							</span>
							<p>ضمانت تعویض کالا</p>
						</li>

						<li className="flex gap-1">
							<span className="text-secondaryDark tracking-[-3px] font-sansBold">
								{data.price}
							</span>
							<p>تومان</p>
						</li>

						<button className="bg-secondaryDark rounded-2xl text-white font-peydaBold text-xl">
							خرید
						</button>
					</ul>
				</div>
			</div>
		</div>
	);
}
