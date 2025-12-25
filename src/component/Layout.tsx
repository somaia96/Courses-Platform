import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Layout = () => {
    return (
        <div>
            <Navbar />
            <div className="py-10">
                <Outlet />
            </div>
        </div>
    )
}
export default Layout