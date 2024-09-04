import { PiUser } from "react-icons/pi";

export default function Communicate() {
	return (
		<>
			<div>
				<p className=" text-3xl font-peydaBold mt-20 text-primaryLight">
					ارتباط مشتریان با نست نت
				</p>
			</div>

			<span className="mt-10 w-80 lg:w-[800px] md:w-[600px] mx-auto flex md:h-[700px] h-[400px]  justify-center items-center  relative">
				{/* نقشه ایران */}
				<img src="../../src/img/iran.png" alt="" className="absolute" />
				{/* باید از مپ استفاده بشه ****** بخش کامنت ها */}
				<div className="absolute lg:top-[10%] lg:left-[25%] md:top-[20%] md:left-[25%] left-[22%] top-[15%]">
					<button className="peer/first bg-white rounded-[50%] lg:size-24 md:size-20 size-16 z-20 flex justify-center items-center ">
						<PiUser className="lg:text-[60px] md:text-[50px] text-[40px]" />
					</button>
					<div className="hidden rounded-xl peer-hover/first:block p-5 w-96 z-20 max-md:w-60 max-md:-right-24 -right-36 mx-auto text-center bg-gray-50 shadow-lg shadow-black/50 absolute">
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Quod ex esse, quo excepturi itaque officiis
						nesciunt optio expedita voluptate ut repudiandae iure.
					</div>
				</div>
				<div className="absolute lg:top-72 lg:right-48 md:top-[40%] md:right-[20%] right-[15%]">
					<button className="peer/sec bg-white rounded-[50%] lg:size-24 md:size-20 size-16 z-20 flex justify-center items-center ">
						<PiUser className="lg:text-[60px] md:text-[50px] text-[40px]" />
					</button>
					<div className="hidden z-20 rounded-xl peer-hover/sec:block p-5 w-96  max-md:w-60 max-md:-right-24  -right-36 mx-auto text-center bg-gray-50 shadow-lg shadow-black/50 absolute">
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Quod ex esse, quo excepturi itaque officiis
						nesciunt optio expedita voluptate ut repudiandae iure. 2
					</div>
				</div>
				<div className="absolute lg:top-80 lg:left-60 md:top-[48%] md:left-[28%] left-[23%]">
					<button className="peer/last bg-white rounded-[50%] lg:size-24 md:size-20 size-16 z-20 flex justify-center items-center ">
						<PiUser className="lg:text-[60px] md:text-[50px] text-[40px]" />
					</button>
					<div className="hidden z-20 rounded-xl peer-hover/last:block p-5 w-96  max-md:w-60 max-md:-right-24 -right-36 mx-auto text-center bg-gray-50 shadow-lg shadow-black/50 absolute">
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Quod ex esse, quo excepturi itaque officiis
						nesciunt optio expedita voluptate ut repudiandae iure. 3
					</div>
				</div>
			</span>
		</>
	);
}
