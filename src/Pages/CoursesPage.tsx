import { useState } from "react"
import CardCourse from "../component/CardCourse"
import { Courses } from "../data"
import Pagination from "../component/Pagination"

const CoursesPage = () => {
    const [page, setPage] = useState(0)
    return Courses.length > 0 ? <div className="flex container flex-col justify-between">
        <div className="grid gap-x-10 gap-y-5 grid-cols-1  sm:grid-cols-2 lg:grid-cols-3">
            {Courses.slice(page * 6, page * 6 + 6).map(course => <CardCourse data={course} key={course.id} />)}
        </div>
        <Pagination page={page} setPage={setPage} total={Courses.length} />
    </div> : <h2 className="text-center font-semibold text-3xl">There Is No Courses Yet ...</h2>

}
export default CoursesPage