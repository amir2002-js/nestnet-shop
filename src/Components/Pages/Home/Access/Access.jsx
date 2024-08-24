import {RiComputerLine, RiMouseLine, RiWifiLine} from "react-icons/ri";
import {BsSdCard} from "react-icons/bs";

function Access() {

    const data = [
        {icon : <RiMouseLine className={`text-2xl text-primaryDark`} />, title: "کامپیوتر و لوازم جانبی" },
        {icon : <RiComputerLine className={`text-2xl text-primaryDark`} />, title: "کالای دیجیتال" },
        {icon : <RiWifiLine className={`text-2xl text-primaryDark`} />, title: "تجهیزات شبکه" },
        {icon : <BsSdCard className={`text-2xl text-primaryDark`} />, title: "انواع کارت حافطه" },
    ]

    return (
        <div className={`grid grid-cols-1 xl:grid-cols-2 gap-3`}>

            <div className={`grid sm:grid-cols-4 grid-cols-2 gap-5 justify-center items-center justify-items-center min-w-[520px]`}>
            {data.map((item, index) => (
                <button key={index} className={`hover:bg-gray-100 transition-all duration-300 w-32 flex flex-col justify-center items-center gap-10 h-52 shadow shadow-black/60 rounded-2xl p-5`} >
                    <div >
                        {item.icon}
                    </div>
                    <p className={` text-sm`}>
                        {item.title}

                    </p>
                </button>
            ))}
            </div>

            <div className={`bg-[url(/src/img/bg.jpg)] w-full min-w-52 grid-cols-1 sm:h-52 h-64 text-lg max-xl:mt-10 bg-center bg-cover relative rounded-2xl flex flex-col justify-end items-start p-10`}>
                <img src={"/src/img/computer.png"} className={`w-60 absolute left-0 -top-14`} alt={"img"}/>
                <p className={`text-white font-sansBold`}>
                    سیستم های قدرتمند
                </p>
                <p className={`text-white font-sansBold`}>
                    ولی مقرون به صرفه
                </p>
                <button className={`rounded-full w-64 flex justify-center items-center bg-primaryDark  mt-2 mr-10 py-1 text-white`}>
                    مشاهده

                </button>
            </div>
        </div>
    );
}

export default Access;