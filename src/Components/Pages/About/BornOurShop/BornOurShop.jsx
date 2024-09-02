import Images from "./Images";

export default function BornOurShop() {
	return (
		<div className="flex justify-between items-center gap-20 max-lg:flex-col">
			<div className="basis-1/2">
				<h2 className="text-3xl text-secondaryDark font-peydaBold text-right my-6">
					داستان تـولد نست نت
				</h2>

				<p className="leading-10 text-right text-sm font-sansLight">
					ما افتخار می‌کنیم که یکی از معتبرترین فروشگاه های اینترنتی
					در ایران باشیم. از زمان شروع فعالیتمان در سال 1402، به دلیل
					کیفیت بالا، قیمت رقابتی و خدمات عالی، به گسترش روز افزون کسب
					و کارمان پی بردیم. امروزه، بیش از صدها هزار مشتری را در
					سراسر کشور داریم که به ما اعتماد کرده‌اند. در الکتروشاپ،
					تلاش می‌کنیم تا انواع محصولاتی را ارائه دهیم که بهترین کیفیت
					و قیمت را داشته باشند. با مراجعه به سایت ما، شما می‌توانید
					از تجربه خرید آنلاینی لذت ببرید که هیچ کجا دیگر نخواهید
					یافت.
				</p>
			</div>
			<Images />
		</div>
	);
}
