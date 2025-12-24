import { LaptopMinimal } from "lucide-react";
import { getLoggedInFun, setLoggedInFun } from "../utils/isLoggedInFun";
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(getLoggedInFun())
    
    const handleLogIn = (isLoggedIn: boolean) => {
        if (!isLoggedIn) return;
        setLoggedInFun(false);
        setIsLoggedIn(false)
    }
    return (
        <nav className="bg-blue-gray-900 py-3 text-white">
            <div className="container items-center justify-between flex">
            <div className="flex gap-16">
                <span className="text-3xl font-semibold">
                    <Link className="flex items-center gap-2" to="/"><LaptopMinimal size={30} /> COURSY</Link>
                </span>
                <ul className="flex items-center gap-5">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="courses">Courses</NavLink></li>
                </ul>
                </div>
                <ul className="flex items-center gap-5">
                    <li><NavLink to="/cart">🛒 Cart</NavLink></li>
                    <li className="cursor-pointer" onClick={() => handleLogIn(isLoggedIn)}>{isLoggedIn ? "LogOut" : <Link to="/login">LogIn</Link>}</li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar