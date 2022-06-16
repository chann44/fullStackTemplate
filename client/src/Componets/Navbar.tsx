import { NavLink } from "react-router-dom";
const links = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "About us",
        link: "/about"
    },
    {
        name: "Docs",
        link: "/docs"
    },
    {
        name: "Carrers",
        link: "/careers"
    }
];



const Navbar = () => {
    return (
        <>
            <nav className="px-2 py-4 border-b-gray-400  border-b sticky top-0 z-50 backdrop-blur-xl">
                <div className="flex justify-between items-center w-[80%] m-auto">
                    <div className="flex items-center">
                        <h1 className="text-3xl">KOMET</h1>
                        <ul className="mx-9">
                            {
                                links.map((link: any) => {
                                    return <>
                                        <NavLink className={({ isActive }) =>
                                            "mx-5 " + " text-lg " + (isActive ? "underline" : "")
                                        }
                                            to={link.link}

                                        >
                                            {link.name}
                                        </NavLink>
                                    </>
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <button className="px-9 py-2 bg-slate-900 text-sm rounded-full ">join waitlist</button>
                    </div>
                </div>
            </nav>
            <div className=""></div>
        </>
    )
}

export default Navbar;