import JoinWaitlist from "./Join waitlist";


const Hero = () => {
    return (
        <>
            <div className="w-[80%] m-auto min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-7xl font-bold" >The easiest way</h1>
                    <h1 className="text-7xl font-bold" >access to web3</h1>
                    <p className="text-xl py-6" >Lorem ipsum dolor sit amet t.</p>
                    <div className="w-full justify-center flex">
                        <JoinWaitlist />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;