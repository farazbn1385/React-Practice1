//import InfoNav from "./Components/InfoNav";
//import Nav from "./Components/Nav";
export default function App() {
    return (
        <div className="box-border">
            <div className="bg-blue-500 w-full h-12 text-center text-white font-Vazir p-2 text-lg flex rounded-lg">
                <p className="mr-130 pt-0.5 pb-1">ارائه خدمات مشاوره</p>
                <p className="mr-2 bg-blue-400 rounded-lg w-25 pt-0.5 pb-1 ">از 10 الی 22</p>
            </div>
            {/*<InfoNav />*/}
            {/*<Nav/>*/}
            <nav className="w-full h-20  text-center relative">
                <button className="absolute top-6 right-285 bg-blue-400 text-white w-39 h-10 rounded-lg">پاسخگویی به سوالات</button>
                <p className="absolute top-6 right-165 text-gray-500">تماس با ما</p>
                <p className="absolute top-6 right-145 text-gray-500">درباره ما</p>
                <p className="absolute top-6 right-125 text-gray-500">مقالات</p>
                <p className="absolute top-6 right-105 text-gray-500">کارگاه ها</p>
                <p className="absolute top-6 right-85 text-gray-500">مشاوران</p>
                <p className="absolute top-6 right-65 text-gray-500">خدمات</p>
                <div className="absolute top-2 right-5 text-blue-500">
                    <a href="#" className=" text-blue-800">مرکز مشاوره ابوذر</a>
                    <br />
                    <a href="#" >خدمات مشاوره و روانشناسی</a>
                </div>
            </nav>

            <div className=" mr-18 w-300 h-100 relative">

                <div className="absolute top-8 w-180 ">
                    <b className="absolute text-3xl text-blue-700 pr-140 w-215 ">کلینیک روانشناسی ابوذر</b>
                    <br />
                    <p className="absolute pt-8 right-140 w-150">کلینیک ابوذر با هدف ارائه خدمات روانشناسی کار خود را در سال 1315 آغاز کرده است. از مهم ترین دلایل برتری مرکز مشاوره روانشناسی روان آرام نسبت به کلینیک های دیگر استفاده از روانشناسان مجرب است. منتظر حضور شما در مرکز مشاوره روان آرام هستیم و امیدواریم به تمامی مراجعه کنندگان عزیز بهترین خدمات را برای زندگی بهتر ارائه دهیم.</p>

                    <q className="absolute pt-42 right-140 w-150">هیچ شور و شوقی در کار نخواهد بود، وقتی در زندگی کم‌کاری وجود داشته باشد. کم‌کاری یعنی نرسیدن به آنچه ظرفیتش را داری.</q>
                    <br />
                    <p className="absolute text-lg font-vazir text-blue-700 pt-50 right-250 w-25">نلسون ماندلا</p>
                    <br /><br />
                    <button className="absolute bg-green-300 top-75 right-150 w-31 h-9 text-center text-white rounded-sm">اینستاگرام کلینیک</button>
                    <button className="absolute bg-blue-400 top-75 right-190 w-20 h-9 text-center text-white rounded-sm">نوبت دهی</button>
                </div>

                <div className="absolute top-8 right-0">
                    <img className="w-130 h-90 rounded-xl" src="data:image/jpeg;base64,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" alt="Picture"></img>
                </div>

            </div>
            <div className="bg-gray-300 w-290 h-30 mr-18 mt-10 relative rounded-tr-4xl rounded-bl-4xl">
                <form href="#" className="absolute top-5 right-40">
                    <label className="pr-10">نیاز به مشاوره در مرکز مشاوره روانشاسی روان آرام دارید؟ فرم زیر را پر کنید، در اسرع وقت با شما تماس گرفته میشود.</label>
                    <br />
                    <input className="absolute top-12 w-80 h-10 pr-2 bg-white rounded-sm text-gray-800" type="text" placeholder="نام و نام خانوادگی"></input>
                    <input className="absolute top-12 right-90 w-80 h-10 bg-white rounded-sm pl-58 dir-rtl text-black" type="tel" placeholder="شماره تلفن"></input>
                    <input className="absolute top-12 right-180 bg-blue-400 w-30 h-9 rounded-sm text-white" type="button" value="ارسال"></input>
                </form>
            </div>

            <div className="w-280 h-30 mr-23 mt-10 grid grid-cols-3 gap-8 text-center">
                <div className="bg-gray-100 h-70  rounded-2xl">
                    <div className="rounded-full bg-white w-25 h-20 mr-35 mt-5 relative scale-100 hover:scale-120 ease-in duration-300">
                        <img className="absolute w-20 h-15 mr-2 mt-2" src="https://ravanaramclinic.com/wp-content/uploads/2022/05/diamond-min.png" alt="pic1"></img>
                    </div>
                    <h1 className="pt-4">مشاوره ازدواج</h1>
                    <p className="text-sm w-80 mr-5 pt-4"> بهترین مشاوره ازدواج، ابزارهایی برای تصمیم گیری بهتر در مورد روابط و ایجاد تغییراتی که زندگی روزمره شما را بسیار بهبود می بخشد، در اختیارتان قرار می­دهند.</p>
                </div>
                <div className="bg-gray-100  rounded-2xl">
                    <div className="rounded-full bg-white w-25 h-20 mr-35 mt-5 relative scale-100 hover:scale-120 ease-in duration-300">
                        <img className="absolute w-20 h-15 mr-2 mt-2" src="https://ravanaramclinic.com/wp-content/uploads/2022/05/home-min.png" alt="pic2"></img>
                    </div>
                    <h1 className="pt-4">مشاوره خانواده</h1>
                    <p className="text-sm w-80 mr-5 pt-4"> خانواده یکی از مهم ترین گروه هایی است که هر کدام از آن عضو آن هستیم
                        با مشاوره خانواده می توانید به روابط خود و خانواده تان کیفیت ببخشید.</p>
                </div>
                <div className="bg-gray-100 rounded-2xl">
                    <div className="rounded-full bg-white w-25 h-20 mr-35 mt-5 relative scale-100 hover:scale-120 ease-in duration-300">
                        <img className="absolute w-20 h-15 mr-2 mt-2" src="https://ravanaramclinic.com/wp-content/uploads/2022/04/volunteer.png" alt="pic3"></img>
                    </div>

                    <h1 className="pt-4">مشاوره نوجوان</h1>

                    <p className="text-sm w-80 mr-5 pt-4"> مشاوره کودک و نوجوان امری حیاتی و ضروری برای کودک و نوجوانانی است
                        که در مرحله رشد قرار دارند چرا که آینده آنان بستگی به این دوره دارد.
                    </p>
                </div>
                <div className="bg-gray-100 h-70 rounded-2xl">
                    <div className="rounded-full bg-white w-25 h-20 mr-35 mt-5 relative scale-100 hover:scale-120 ease-in duration-300">
                        <img className="absolute w-20 h-15 mr-2 mt-2" src="https://ravanaramclinic.com/wp-content/uploads/2022/05/sex-symbol-min.png" alt="pic4"></img>
                    </div>

                    <h1 className="pt-4">مشاوره جنسی</h1>

                    <p className="text-sm w-80 mr-5 pt-4"> مشاوره جنسی نیازی اساسی برای هر زوجی است که در روابط جنسی خود دچار
                        مشکل می شوند و بایستی به کمک مشاور آن را حل کنند.
                    </p>
                </div>
                <div className="bg-gray-100 rounded-2xl">
                    <div className="rounded-full bg-white w-25 h-20 mr-35 mt-5 relative scale-100 hover:scale-120 ease-in duration-300">
                        <img className="absolute w-20 h-15 mr-2 mt-2" src="https://ravanaramclinic.com/wp-content/uploads/2022/05/book-min.png" alt="pic15"></img>
                    </div>

                    <h1 className="pt-4">مشاوره تحصیلی</h1>

                    <p className="text-sm w-80 mr-5 pt-4"> اهمیت تحصیل در زندگی افراد موجب شده است که مشاوره تحصیلی به عنوان
                        امری مهم برای ساختن آینده شغلی و زندگی اجتماعی تلقی شود.
                    </p>
                </div>
                <div className="bg-gray-100 rounded-2xl">
                    <div className="rounded-full bg-white w-25 h-20 mr-35 mt-5 relative scale-100 hover:scale-120 ease-in duration-300">
                        <img className="absolute w-20 h-15 mr-2 mt-2" src="https://ravanaramclinic.com/wp-content/uploads/2022/05/network-min.png" alt="pic6"></img>
                    </div>

                    <h1 className="pt-4">مشاوره ارتباطی</h1>

                    <p className="text-sm w-80 mr-5 pt-4"> در هر جایی که باشید نیاز به ارتباط امری غیر قابل انکار است. مشاوره
                        ارتباطی به شما کمک می کند تا روابط خود با دیگران را بهبود ببخشید.</p>
                </div>
            </div>

            <div className="bg-blue-100 w-290 h-150 mr-18 mt-130 relative rounded-4xl">
                <div className="absolute w-120 mr-2 mt-10">
                    <h1 className="pt-18 pr-10 text-blue-800 text-2xl">آشنایی بیشتر با کلینیک روانشناسی ابوذر</h1>
                    <p className="pt-7 pr-10 text-xl">
                        برای آشنایی بیشتر با خدمات و محیط مرکز مشاوره روان آرام ویدیو مقابل را تماشا کنید. روان آرام دارای خدمات متعدد در مشاوره، با مجرب ترین کادر مشاوران در سراسر ایران.
                    </p>
                </div>

                <div className="absolute top-10">
                    <video className=" mr-135 rounded-xl" height="80" width="580" controls loop>
                        <source src="https://static.cdn.asset.aparat.com/avt/50803615_15s.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="absolute top-100  text-center">
                    <a href="#" target="_blank" className="absolute w-40 h-40 mr-20 bg-gray-100 rounded-xl">
                        <img className="w-20 mt-5 mr-10" src="https://ravanaramclinic.com/wp-content/uploads/2022/01/computer-2.png" alt="Pic1"></img>
                        <h1 className="pt-5">خدمات ما</h1>
                    </a>

                    <a href="#" target="_blank" className="absolute w-40 h-40 bg-gray-100 mr-90 rounded-xl">
                        <img className="w-20 mt-5 mr-10" src="https://ravanaramclinic.com/wp-content/uploads/2022/01/videocall-2.png" alt="Pic2"></img>
                        <h1 className="pt-5">مشاوران ما</h1>
                    </a>

                    <a href="#" target="_blank" className="absolute w-40 h-40 bg-gray-100 mr-160 rounded-xl">
                        <img className="w-20 mt-5 mr-10" src="https://ravanaramclinic.com/wp-content/uploads/2022/01/clipboard-1.png" alt="Pic3"></img>
                        <h1 className="pt-5">تست روانشناسی</h1>
                    </a>

                    <a href="#" target="_blank" className="absolute w-40 h-40 bg-gray-100 mr-230 rounded-xl">
                        <img className="w-20 mt-5 mr-10" src="https://ravanaramclinic.com/wp-content/uploads/2022/01/confrontation-1.png" alt="Pic4"></img>
                        <h1 className="pt-5">پرسش و پاسخ</h1>
                    </a>
                </div>
            </div>

            <div className="bg-gray-100 w-290 h-155 mr-18 mt-10 rounded-2xl">
                <div className="flex w-100% h-15">
                    <p className="mt-7 mr-48">خانواده</p>
                    <p className="mt-7 mr-77">کودک</p>
                    <p className="mt-7 mr-83">اختلالات</p>
                </div>

                <div className="grid grid-cols-3 gap-3 w-100% h-120 mt-1 text-sm">
                    <div className="mr-20 mt-5 bg-blue-200 w-70 h-58 rounded-lg">
                        <a href="#" target="_blank">
                            <img className="mr-2 mt-2 rounded-lg" src="https://ravanaramclinic.com/wp-content/uploads/2024/12/Family-psychologist-cover-263x170.jpg.webp" alt="Serv1">
                            </img>
                            <p className="text-center pt-4">روانشناس خانواده</p>
                        </a>
                    </div>

                    <div className=" mt-5 mr-10 bg-blue-200 w-70 h-58 rounded-lg">
                        <a href="#" target="_blank">
                            <img className="mr-2 mt-2 rounded-lg" src="https://ravanaramclinic.com/wp-content/uploads/2025/01/Emotional-intelligence-in-children-cover-263x170.jpg.webp" alt="Serv1">
                            </img>
                            <p className="text-center pt-2">5 گام برای پرورش هوش هیجانی در کودکان</p>
                        </a>
                    </div>

                    <div className=" mt-5 mr-5 bg-blue-200 w-70 h-58 rounded-lg">
                        <a href="#" target="_blank">
                            <img className="mr-2 mt-2 rounded-lg" src="https://ravanaramclinic.com/wp-content/uploads/2025/02/What-is-panic-disorder-and-how-can-it-be-diagnosed-cover-263x170.jpg.webp" alt="Serv1">
                            </img>
                            <p className="text-center pt-2">اختلال پانیک چیست و چگونه می‌توان آن را تشخیص داد؟</p>
                        </a>
                    </div>

                    <div className=" mr-20 mt-5 bg-blue-200 w-70 h-58 rounded-lg">
                        <a href="#" target="_blank">
                            <img className="mr-2 mt-2 rounded-lg" src="https://ravanaramclinic.com/wp-content/uploads/2024/12/Parenting-Through-Puberty-cover-263x170.jpg.webp" alt="Serv1">
                            </img>
                            <p className="text-center pt-4">بلوغ</p>
                        </a>
                    </div>

                    <div className=" mt-5 mr-10 bg-blue-200 w-70 h-58 rounded-lg">
                        <a href="#" target="_blank">
                            <img className="mr-2 mt-2 rounded-lg" src="https://ravanaramclinic.com/wp-content/uploads/2024/11/Depression-in-children-cover-263x170.jpg.webp" alt="Serv1">
                            </img>
                            <p className="text-center pt-2">افسردگی کودکان یا افسردگی دوران کودکی چیست؟</p>
                        </a>
                    </div>

                    <div className=" mt-5 mr-5 bg-blue-200 w-70 h-58 rounded-lg">
                        <a href="#" target="_blank">
                            <img className="mr-2 mt-2 rounded-lg" src="https://ravanaramclinic.com/wp-content/uploads/2025/01/How-do-negative-thoughts-exacerbate-anxiety-cover-263x170.jpg.webp" alt="Serv1">
                            </img>
                            <p className="text-center pt-4">چگونه افکار منفی اضطراب را تشدید می‌کنند؟</p>
                        </a>
                    </div>

                </div>

            </div>
            <footer className="grid grid-cols-3 gap-8 w-full h-60 bg-blue-400 mt-20 text-white">
                <div className="w-120 h-auto mr-5 mt-8">
                    <h1 className="text-2xl mr-27 pt-2">مرکز مشاوره ابوذر</h1>
                    <p className="mt-3 mr-0 w-120">کلینیک ابوذر با دارا بودن جمعی از مشاوران خبره، اساتید دانشگاه و درمانگران مفتخر است در خدمت شما عزیزان باشد. لازم به ذکر است که کلیه خدمات این مجموعه توسط متخصصان دوره دیده در زمینه های مختلف روانشناسی عرضه میگردد.
                    </p>

                </div>

                <div className="w-100 h-auto mt-15 mr-5">
                    <h1 className="text-2xl mr-23 ">مسیریابی تا کلینیک ابوذر</h1>

                    <a href="https://nshn.ir/da_bZw5YIxa3CN" target="_blank" className="w-10 h-2 flex">
                        <img className="w-10 h-10 mr-65 mt-4" alt="Neshan" src="https://ravanaramclinic.com/wp-content/uploads/2023/03/40533745-1.png"></img>
                    </a>

                    <a href="https://maps.app.goo.gl/1zXYTgP4DKxCojt46" target="_blank" className="flex">
                        <img className="w-10 h-10 mr-30 mt-3" alt="Map" src="https://img.icons8.com/?size=80&id=xt0xIC1nYCRm&format=png"></img>
                    </a>

                </div>

                <div className="w-70 h-auto mr-3 mt-15">
                    <h1 className="text-2xl mr-13 ">راه های ارتباطی با ما در فضای مجازی</h1>

                    <a href="https://www.linkedin.com/in/faraz-baniabbas-4a0001280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className=" h-2 flex">
                        <img className="w-10 h-10 mr-55 mt-4" alt="LinkDin" src="https://img.icons8.com/?size=32&id=16166&format=png"></img>
                    </a>

                    <a href="https://github.com/farazbn1385" target="_blank" className=" h-2 flex">
                        <img className="w-10 h-10 mr-33 mt-2" alt="Github" src="https://img.icons8.com/?size=48&id=fmFqQmR0UdsR&format=png"></img>
                    </a>

                    <a href="https://t.me/Faraz_bn2007" target="_blank" className=" flex">
                        <img className="w-10 h-10 mr-12 mt-1" alt="Telegram" src="https://img.icons8.com/?size=32&id=45163&format=png"></img>
                    </a>

                </div>
            </footer>
        </div>
    );
}