interface Props {
    title: String
    text: String
}

const WhyKOmetCard = ({ title, text }: Props) => {
    return (
        <>
            <div className="h-screen flex bg-black flex-col justify-start px-11 ">
                <h1 className="text-5xl font-bold">{title}</h1>
                <p className="text-xl py-7">{text}</p>
            </div>
        </>
    )
}

export default WhyKOmetCard;