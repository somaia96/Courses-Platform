import { ReactNode } from "react"
import { NavLink } from "react-router-dom"

const NavLinkList = ({handleClose, name, href, icon }: {handleClose:()=>void, icon?: ReactNode, name: string, href: string }) => {
    return <li onClick={handleClose} className="hover:bg-black/10 sm:hover:bg-white/10 p-2 sm:rounded-md">
        <NavLink className={({ isActive }) => isActive ? "flex items-center text-light-blue-600 hover:bg-white/10 p-2 rounded-md gap-1" : "flex items-center hover:bg-white/10 p-2 rounded-md gap-1"} to={href}>
            {icon?icon:""}{name}
        </NavLink>
    </li>

}
export default NavLinkList