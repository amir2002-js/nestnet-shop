import Logo from "../Logo/Logo.jsx";
import Feature from "./Features/Feature.jsx";
import {PiBoxArrowUp, PiHeadset, PiMapPinArea, PiMapPinAreaLight, PiMedal} from "react-icons/pi";
import UlLi from "./UlLi/UlLi.jsx";

function Footer() {

    const liData = {
        customers: [
            {
                name:"ورود | ثبت نام",
                id:1
            },
            {
                name:"شکایات و پیشنهادات",
                id:2
            },
            {
                name:"مرجوعی سفارش",
                id:3
            }
        ],

        guide:[
            {
                name:"نحوه ثبت سفارش" ,
                id:1
            },
            {
                name: "رویه های ارسال کالا",
                id:2
            },
            {
                name:  "شیوه های پرداخت",
                id:3
            }
        ],

        follow:[
            {
                name:"مجله الکتروشاپ" ,
                id:1
            },
            {
                name: "درباره ما",
                id:2
            },
            {
                name:  "تماس با ما",
                id:3
            }
        ]
    }

    return (
        <div className={` bg-gray-100 text-gray-500`}>
        <div className={`flex max-lg:flex-col justify-between lg:items-start items-center max-w-maxWidth px-4 mx-auto gap-10 py-16 max-sm:py-8`}>

            {/*logo & feature*/}
            <div className={`max-lg:min-w-[216px] lg:max-w-maxWidth flex flex-col items-center justify-start  gap-14 h-full`}>
                <Logo width={'w-72'} />
                <div className={`lg:w-full w-[90vw] flex lg:flex-col max-sm:flex-wrap max-sm:gap-14 font-peydaBold lg:gap-7 justify-evenly items-center p-4 rounded-2xl bg-gradient-to-t from-gray-200/40 to-gray-300`}>
                    <Feature title={"ارسال سریع"} caption={"از طریق پست و..."} icon={<PiBoxArrowUp className={`text-xl`} />} />
                    <Feature title={"کیفیت بالا"} caption={"بالاترین کیفیت محصولات"} icon={<PiMedal className={`text-2xl`} />} />
                    <Feature title={"پشتیبانی همه روزه"} caption={"حتی جمعه ها"} icon={<PiHeadset className={`text-2xl`} />} />
                </div>
            </div>

            {/*main*/}
            <div className={` flex-grow flex flex-col justify-start items-start max-lg:order-last`}>
                {/*text*/}
                <p className={`leading-9`}>
                    <span className={`font-sansBold`}>
                        فروشگاه اینترنتی زون شاپ ،
                    </span>

                    <span>
                    در قلب ایران فعالیت خودش را آغاز نموده است،
                    ما بهترین نوع کالاها را برای مردم شریف ایران در این سایت فراهم کرده ایم و برای
                    رضایت و خوشحالی شما تلاش میکنیم. ما افتخار می‌کنیم که یکی از معتبرترین فروشگاه های
                    اینترنتی در ایران باشیم. از زمان شروع فعالیتمان در سال 1402، به دلیل کیفیت بالا،
                    قیمت رقابتی و خدمات عالی، به گسترش روز افزون کسب و کارمان پی بردیم.امروزه،
                    بیش از صدها هزار مشتری را در سراسر کشور داریم که به ما اعتماد کرده‌اند. تلاش
                    می‌کنیم تا انواع محصولاتی را ارائه دهیم که بهترین کیفیت و قیمت را داشته باشند.
                    </span>
                </p>

                {/* location */}
                <div className={`px-5 py-10 my-10 border-y border-gray-300 w-full flex justify-between items-center max-xsm:flex-col max-xsm:gap-14`}>
                    <div className={`grid gap-4 grid-cols-7 justify-items-start max-xsm:justify-items-center items-center `}>
                        <div className={`row-span-2 col-span-1 max-xsm:col-span-7`}>
                            <PiMapPinArea className={"text-[64px]"}/>
                        </div>
                        <div className={`py-1 px-4 rounded-full bg-slate-300 shadow-lg shadow-gray-800/50 col-span-6 max-xsm:col-span-7 line-clamp-1 truncate `}>
                            آدرس فروشگاه
                        </div>
                        <div className={`col-span-6 max-xsm:col-span-7 text-center`}>
                            چهار محال و بختیاری - شهر بروجن - خیابان ایران - کوچه ایران - پلاک 102
                        </div>
                    </div>
                    <div className={`flex flex-col justify-center items-center gap-5`}>
                        <div className={`py-1 px-4 rounded-full bg-slate-300 shadow-lg shadow-gray-800/50 col-span-6 line-clamp-1 truncate`}>
                             انتقاد و پیشنهاد
                        </div>
                        <p>
                            njscj@gmail.com
                        </p>
                    </div>
                </div>

                {/* urls */}
                <div className={`flex items-center justify-between lg:justify-start lg:gap-24 max-sm:flex-col max-sm:gap-14 max-sm:items-start max-sm:mr-5 w-full`}>
                    <UlLi title={"همراه با ما"} li={liData.follow} />
                    <UlLi title={"راهنمای خرید"} li={liData.guide} />
                    <UlLi title={"خدمات مشتریان"} li={liData.customers} />
                </div>

                {/* site */}
                <div className={`pt-5 mt-5 border-t border-gray-300 w-full`}>
                    <p className={`font-sansLight text-gray-400`}>تمامی حقوق سایت محفوظ است 2024</p>
                </div>
            </div>


            <div className={` min-w-[248px] font-peydaBold text-[30px] text-white`}>
                <div className={`flex flex-col justify-center items-center bg-sky-500 shadow-lg shadow-blue-400 rounded-2xl px-4 py-6`}>

                <p className={` `}>
                    همه روزه پاسخگوی شما عزیزان هستیم
                </p>
                <p className={`py-5 my-12 w-full text-center border-y border-white`}>
                    03834552550
                </p>
                <div>
                    <img src="../../src/img/Phone3d.png" alt="" className={`w-56`} />
                </div>
                </div>

            </div>
        </div>
        </div>
    );
}

export default Footer;