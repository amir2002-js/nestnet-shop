import BgIntro from "./bg-Intro/BgIntro";
import Instro from "./Instro/Instro";

export default function About() {
	return (
		<>
			<div className="relative -z-10 h-[600px] max-sm:h-[850px]">
				<BgIntro />
			</div>
			<div className="container max-w-maxWidth z-20 -mt-[650px] max-sm:-mt-[860px]">
				<Instro />
			</div>
			<div className="container max-w-maxWidth text-white text-center mt-72">
				
			</div>
		</>
	);
}
