import { AiFillTwitterSquare, AiFillLinkedin, } from "react-icons/ai"
import { BsDiscord } from "react-icons/bs"


const Footer = () => {
    return (
        <>
            <footer className=" p-12 w-[80%] m-auto flex justify-between">
                <div className="flex items-center">
                    <h1 className="text-4xl mx-12">KOMET</h1>
                    <p>Copyright © 2021-22 Komet inc all rights reserved</p>
                </div>
                <div className="flex ">
                    <a href=""><AiFillLinkedin className="text-4xl text-white mx-3" /></a>
                    <a href=""><AiFillTwitterSquare className="text-4xl text-white mx-3" /></a>
                    <a href=""><BsDiscord className="text-4xl text-white mx-3" /></a>
                </div>
            </footer>
        </>
    )
}

export default Footer;