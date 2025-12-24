import { ICourses } from "@/interfaces";
import { Courses } from "../data"
import { getLoggedInFun } from "../utils/isLoggedInFun"
import { DollarSign, GraduationCap, X } from "lucide-react"

const CartPage = () => {
    let myCourses = Courses;
    const totalPrice = (array: ICourses[]) => {
        return array.reduce((res, cur) => cur.price + res, 0)
    }
    return (
        <div>
            <h1 className="text-5xl font-semibold mb-10">Shopping Cart</h1>

            {getLoggedInFun() ? (myCourses.length ? <div className="flex flex-col gap-5">
                <div className="flex gap-5 font-semibold">
                    <h2>Your Courses: {myCourses.length} Course</h2>
                    <p>Total Price: {totalPrice(myCourses)}$</p>
                </div>
                {myCourses.map(course => <div key={course.id} className="bg-gray-200 shadow-lg p-5 border-b-2 border-b-gray-400/60 flex items-center gap-10 text-gray-900" >
                    <div className="w-1/3">
                        <h2 className="text-black font-semibold text-xl flex gap-3 items-center">{course.title} <GraduationCap size={50} /></h2>
                        <p className="flex items-center"><DollarSign color="#007b0e" height={20} /><span className="font-semibold">Price: </span>{course.price}$</p>
                    </div>
                    <button className="bg-red-100 w-6 h-6 rounded-full flex items-center justify-center"><X size={15} strokeWidth={3} color="red" /></button>
                </div>)
                }
            </div > : <h2 className="text-lg text-gray-900 w-1/2">Your cart is empty add some new courses to show them here...</h2>) : <h2 className="text-5xl text-center mt-10 font-semibold">Please Login First</h2>
            }</div>)
}
export default CartPage