import { ChartNoAxesColumnIncreasing, DollarSign, GraduationCap, LibraryBig } from "lucide-react"
import AddToCartBTN from "../component/AddToCartBTN"
import { Courses } from "../data"

const CourseDetailsPage = () => {
    let id: string | string[] = window.location.href.split("/")
    id = id[id.length - 1]

    let course = Courses.filter(item => item.id === +id)[0]
    return (<div className="container text-gray-900 space-y-5">
        <h2 className="text-black font-semibold text-3xl md:text-5xl flex gap-3 items-center">{course.title} <GraduationCap size={50} /></h2>
        <p className="md:w-1/2">{course.fullDescription}</p>
        <p className="flex gap-1"><LibraryBig width={20} color="#f332f4" /><span className="font-semibold">Lessons: </span>{course.lessonsCount}</p>
        <p className="flex gap-1 items-center"><ChartNoAxesColumnIncreasing strokeWidth={3} height={20} color="#1b7bff" /><span className="font-semibold">Level: </span>{course.level}</p>
        <p className="flex gap-1 items-center"><DollarSign color="#007b0e" height={20} /><span className="font-semibold">Price: </span>{course.price}$</p>
        <AddToCartBTN item={course} />
    </div>
    )
}
export default CourseDetailsPage