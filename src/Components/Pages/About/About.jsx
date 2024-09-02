import Advertise from "./Advertise/Advertise.jsx";
import BgIntro from "./bg-Intro/BgIntro";
import BornOurShop from "./BornOurShop/BornOurShop.jsx";
import Communicate from "./Communicate/Communicate.jsx";
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
			<div className="container max-w-maxWidth text-center mt-72 max-sm:mt-48 max-xsm:mt-52">
				<BornOurShop />
                <Advertise />
                <Communicate />
			</div>
		</>
	);
}
