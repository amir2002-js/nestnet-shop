import { PiUser } from "react-icons/pi";
import { SlActionUndo, SlDislike, SlLike } from "react-icons/sl";
import Form from "./Form";

export default function Comment() {
	return (
		<>
			<div className="container max-w-[800px] border rounded-lg shadow-lg my-5 shadow-slate-200 flex flex-col justify-between gap-10 p-5">
				<div className="flex justify-between gap-10 items-center">
					<div className="flex flex-col gap-4 justify-center items-center">
						<div className="min-h-20 min-w-20 max-xsm:min-h-12 max-xsm:min-w-12 rounded-full border flex justify-center items-center shadow-lg">
							<PiUser className="text-[50px] max-xsm:text-3xl" />
						</div>
						<p className="truncate line-clamp-1">name user</p>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Eum reiciendis earum aperiam esse commodi eaque sed
						voluptatum laudantium itaque, necessitatibus labore
						facere, maiores reprehenderit fugiat, repudiandae
						corrupti sapiente! Excepturi, iusto. lo
					</p>
				</div>
				<div className="w-full flex justify-between items-center ">
					<button className="px-4 py-1 hover:bg-slate-100 rounded-full flex gap-2 items-center">
						<p>پاسخ به این نظر</p>
						<SlActionUndo />
					</button>
					<div className="flex gap-5">
						<button className="p-3 rounded-full hover:text-sky-600 text-xl hover:bg-slate-100 flex justify-center items-center">
							<SlLike className="" />
						</button>
						<button className="p-3 rounded-full hover:text-red-600 text-xl hover:bg-slate-100 flex justify-center items-center">
							<SlDislike className="" />
						</button>
					</div>
				</div>
			</div>
            <Form />
		</>
	);
}
