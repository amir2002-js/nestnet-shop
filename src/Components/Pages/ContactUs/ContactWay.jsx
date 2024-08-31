import { useState } from "react";
import { CiClock1, CiLocationOn, CiMail, CiPhone } from "react-icons/ci";

export default function ContactWay() {
	const [contact, setContact] = useState([
		{
			id: 1,
			title: "به ما ایمیل بزنید",
			description: "Info@yoursite.com",
			icon: <CiMail className="text-[50px]" />,
		},
		{
			id: 2,
			title: "آدرس فروشگاه ما",
			description: "بروجن - خیابان ایران",
			icon: <CiLocationOn className="text-[50px]" />,
		},
		{
			id: 3,
			title: "ساعات کاری",
			description: "شنبه تا پنج شنبه",
			icon: <CiClock1 className="text-[50px]" />,
		},
		{
			id: 4,
			title: "با ما تماس بگیرید",
			description: "پشتیبانی: 03539876543",
			icon: <CiPhone className="text-[50px]" />,
		},
	]);
	return (
		<div className="mt-16">
			{/* titre */}
			<p className="text-center text-3xl font-peydaBold text-secondaryDark my-14">
				راه های ارتباط با ما
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-2 max-sm:mx-5 xl:grid-cols-4 gap-10">
				{contact.map((item) => (
					<div
						key={item.id}
						className="*:text-center p-10 hover:bg-slate-100 transition-all duration-300 flex flex-col justify-center items-center gap-5 border-t-4 border-secondaryDark rounded-b-2xl shadow-lg"
					>
						{item.icon}
						<p className="text-lg">{item.title}</p>
						<figcaptio0 className={`text-sm font-sansLight`}>{item.description}</figcaptio0>
					</div>
				))}
			</div>
		</div>
	);
}
