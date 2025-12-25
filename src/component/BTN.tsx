import { ReactNode } from "react"

const BTN = ({ children, handleClick, className }: { className?: string, handleClick?: () => void, children: ReactNode }) => {
    return <button
        onClick={handleClick}
        className={`hover:scale-105 
                text-white bg-gradient-to-r 
                from-blue-600 
                to-blue-gray-700 
                hover:bg-gradient-to-bl 
                focus:ring-4 
                focus:outline-none 
                focus:ring-cyan-300 
                dark:focus:ring-cyan-800 
                font-medium rounded-base 
                text-xs lg:text-sm
                p-2 lg:px-4 lg:py-2.5
                text-center leading-5 
                rounded-md ${className}`}>
        {children}
    </button>
}
export default BTN