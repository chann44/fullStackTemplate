interface Props {
    title: String
    text: String
}



const FeatureCard = ({ title, text }: Props) => {
    return (
        <>
            <div className="relative my-6 w-[25%]">
                <div className="flex absolute -top-12 left-7 w-32 rounded-full bg-gray-800 items-center justify-center p-12">
                    <img className="object-cover" src="https://www.flint.money/_next/image?url=%2Fencrypted-file.png&w=64&q=75" alt="" />
                </div>
                <div className=" bg-gray-900 pt-24 pb-16 px-10 min-h-[400px]">
                    <h1 className="text-3xl py-4">{title}</h1>
                    <p className="lg">{text}</p>
                </div>
            </div>
        </>
    )
}

export default FeatureCard;