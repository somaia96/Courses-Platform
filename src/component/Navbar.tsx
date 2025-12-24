import { LaptopMinimal, ShoppingCart } from "lucide-react";
import { getLoggedInFun, setLoggedInFun } from "../utils/isLoggedInFun";
import { useState } from "react"
import { Link } from "react-router-dom"
import NavLinkList from "./NavLinkList";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(getLoggedInFun())

    const handleLogIn = (isLoggedIn: boolean) => {
        if (!isLoggedIn) return;
        setLoggedInFun(false);
        setIsLoggedIn(false)
    }
    return (
        <nav className="shadow-lg bg-blue-gray-900 py-3 text-white">
            <div className="container flex items-center justify-between">
                <div className="flex gap-16 items-center">
                    <span className="text-3xl font-semibold">
                        <Link className="flex items-center font-[cursive] gap-2" to="/">
                            <LaptopMinimal size={30} /> COURSY
                        </Link>
                    </span>
                    <ul className="flex items-center gap-5">
                        <NavLinkList name="Home" href="/" />
                        <NavLinkList name="Courses" href="/courses" />
                    </ul>
                </div>
                <ul className="flex items-center gap-1">
                    <NavLinkList icon={<ShoppingCart size={20} />} name="Cart" href="/cart" />
                    <li className="cursor-pointer hover:bg-white/10 p-2 rounded-md"
                        onClick={() => handleLogIn(isLoggedIn)}>{isLoggedIn ? "LogOut" : <Link to="/login">
                            LogIn
                        </Link>}
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar