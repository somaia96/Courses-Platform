import { LaptopMinimal, Menu, ShoppingCart } from "lucide-react";
import { getLoggedInFun, setLoggedInFun } from "../utils/isLoggedInFun";
import { useState } from "react"
import { Link } from "react-router-dom"
import NavLinkList from "./NavLinkList";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(getLoggedInFun())
    const [isHidden, setIsHidden] = useState<boolean>(true)

    const handleLogIn = (isLoggedIn: boolean) => {
        
        if (!isLoggedIn) return;
        setLoggedInFun(false);
        setIsLoggedIn(false)
        setIsHidden(true)
    }
    const handleClose=()=>{
        setIsHidden(true)
    }
    return (
        <nav className="relative shadow-lg bg-blue-gray-900 py-3 text-white">
            <div className="container flex items-center justify-between">

                <span className="text-2xl sm:text-3xl mr-2 sm:mr-5 font-semibold">
                    <Link className="flex items-center font-[cursive] gap-2" to="/">
                        <LaptopMinimal size={30} /> COURSY
                    </Link>
                </span>
                <Menu onClick={() => setIsHidden(prev => !prev)} className="block cursor-pointer sm:hidden" />
                 <div
                    className={`bg-white ${isHidden?"hidden":"flex"} sm:bg-inherit text-gray-900 sm:text-white z-50 absolute sm:relative
                     right-5 sm:right-0 sm:top-0 top-12 sm:flex flex-col sm:flex-row w-1/2 sm:flex-1 sm:w-full justify-center`} >
                    <ul className="flex flex-col sm:flex-row justify-center sm:justify-start sm:items-center flex-1 sm:gap-5">
                        <NavLinkList handleClose={handleClose} name="Home" href="/" />
                        <NavLinkList handleClose={handleClose} name="Courses" href="/courses" />
                    </ul>
                    <ul className="flex flex-col sm:flex-row justify-center sm:justify-start sm:items-center sm:gap-1">
                        <NavLinkList handleClose={handleClose} icon={<ShoppingCart size={20} />} name="Cart" href="/cart" />
                        <li className="cursor-pointer hover:bg-black/10 sm:hover:bg-white/10 sm:rounded-md"
                            onClick={() => handleLogIn(isLoggedIn)}>
                                <Link className="w-full px-5 py-4 block sm:p-2" to={isLoggedIn?"/":"/login"}>
                                {isLoggedIn ? "LogOut" : "LogIn"}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar