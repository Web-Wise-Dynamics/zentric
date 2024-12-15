import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { NavLink, useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)
    return (
        <nav className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
            <div className="flex items-center gap-4">
                <img src="/logo.webp" alt="" width={40} height={40}/>
                <h1 className="font-bold text-xl">Zentric</h1>
            </div>
            <ul className="hidden md:flex items-start gap-4 font-medium">
                <li className="py-1">
                    <NavLink to={"/"}>
                        Home
                        <hr className="border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden"/>
                    </NavLink>
                </li>
                <li className="py-1">
                    <NavLink to={"/doctors"}>
                        Doctors
                        <hr className="border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden"/>
                    </NavLink>
                </li>
                <li className="py-1">
                    <NavLink to={"/about"}>
                        About
                        <hr className="border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden"/>
                    </NavLink>
                </li>
                <li className="py-1">
                    <NavLink to={"/contact"}>
                        Contact
                        <hr className="border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden"/>
                    </NavLink>
                </li>
            </ul>
            <div className="flex items-center gap-4">
                {
                    token 
                    ? 
                        <div className="flex items-center gap-2 cursor-pointer group relative">
                            <img src="/default-man.webp" alt="" width={40} height={40} className="rounded-full"/>
                            <div className="flex items-center gap-2">
                                <p className="font-medium">John Doe</p>
                                <ChevronDown/>
                            </div>
                            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 hidden group-hover:block">
                                <div className="min-w-48 bg-stone-50 rounded flex flex-col gap-4 p-4">
                                    <p onClick={() => navigate('/my-profile')} className="cursor-pointer hover:text-black">My profile</p>
                                    <p onClick={() => navigate('/my-appoinment')} className="cursor-pointer hover:text-black">My appoinment</p>
                                    <p onClick={() => setToken(false)} className="cursor-pointer hover:text-black">Logout</p>
                                </div>
                            </div>
                        </div> 
                    :
                        <button 
                            onClick={() => navigate("/login")}
                            className="bg-primary text-white py-2 px-4 rounded-full font-light hidden md:block"
                        >
                            Login
                        </button>
                }
            </div>
        </nav>
    )
}

export default Navbar