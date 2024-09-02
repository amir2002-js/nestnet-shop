export default function Instro() {
	return (
		<div className=" flex flex-col z-20 justify-evenly h-[400px] max-sm:h-[600px] items-center container max-w-maxWidth sm:mt-20 mt-10 font-sansLight sm:gap-10">
			<p className="text-3xl font-peydaBold drop-shadow-lg text-center">
				<span>{`درباره فروشگاه`}</span>
				<span className="text-primaryLight">{` نست نت `}</span>
			</p>
			<figcaption className="max-w-[900px] container text-center tracking-tight leading-10">
				نست نت در سال 1400 با هدف فروش و عرضه محصولات و خدمات کامپیوتری
				و دیجیتال در شهرستان بروجن آغاز به فعالیت نمود. در اين سالها
				همواره سعی كرده ایم همگام با آخرین تکنولوژی های روز دنيا و با
				بهره گیری از خلاقیت و متخصص خود ، جديدترين و متفاوت ترين خدمات
				را ارائه دهيم. اعتبار ما خلق بهترين تجربه خريد برای مشتريان در
				محیطی با نشاط، صمیمی است.
			</figcaption>
			<div className="flex justify-center items-center gap-5 max-sm:flex-col">
				<button className="py-1 w-52 rounded-xl bg-slate-400 shadow-2xl  text-white font-peydaBold text-2xl">
					درباره ما
				</button>
				<button className="bg-secondaryDark py-1 w-52 rounded-xl text-white font-peydaBold text-2xl">
					درباره ما
				</button>
			</div>
		</div>
	);
}
