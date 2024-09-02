export default function Intro() {
	return (
		<div className="absolute -top-10 -z-10 drop-shadow-2xl">
			<div
				className={`w-[100vw] mx-auto h-[600px]  max-sm:h-[850px] -mt-40 bg-slate-100 `}
			></div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#f1f5f9"
					fillOpacity="1"
					d="M0,160L60,160C120,160,240,160,360,154.7C480,149,600,139,720,128C840,117,960,107,1080,106.7C1200,107,1320,117,1380,122.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
				></path>
			</svg>
		</div>
	);
}
