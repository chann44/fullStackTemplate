import WhyKOmetCard from "./whycard";

const WhyKomet = () => {
    return (
        <>
            <div>
                <div className="w-[80%] m-auto sticky top-80 flex items-start ">
                    <div className="sticky top-80 mx-12 w-[40%] ">
                        <img className="object-cover" src="https://www.flint.money/_next/image?url=%2Fright.png&w=1920&q=75" alt="" />
                    </div>
                    <div className="w-[60%] p-6">
                        <WhyKOmetCard title="They grow so fast" text="Your USDTs and USDCs feel so at home here, that they will grow by 10% by the end of the year. Allow your stable coins to generate stable returns for you." />
                        <WhyKOmetCard title="They grow so fast" text="Your USDTs and USDCs feel so at home here, that they will grow by 10% by the end of the year. Allow your stable coins to generate stable returns for you." />
                        <WhyKOmetCard title="They grow so fast" text="Your USDTs and USDCs feel so at home here, that they will grow by 10% by the end of the year. Allow your stable coins to generate stable returns for you." />
                        <WhyKOmetCard title="They grow so fast" text="Your USDTs and USDCs feel so at home here, that they will grow by 10% by the end of the year. Allow your stable coins to generate stable returns for you." />
                        <div className="h-[35vh] flex bg-black flex-col justify-start px-11 ">
                            <h1 className="text-5xl font-bold">They grow so fast</h1>
                            <p className="text-xl py-7">Your USDTs and USDCs feel so at home here, that they will grow by 10% by the end of the year. Allow your stable coins to generate stable returns for you."</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default WhyKomet;