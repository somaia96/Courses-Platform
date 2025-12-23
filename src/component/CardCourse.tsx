import { ICourses } from "../interfaces"

const CardCourse = ({ data }: { data: ICourses }) => {
    const handleViewDetails = (id: number) => {
        window.location.href = `/courses/${id}`
    }
    return (
        <div className="h-full flex gap-2 flex-col rounded-md bg-blue-300/30 p-3">
            <h2 className="text-lg font-semibold text-blue-gray-900"><span className="font-semibold">⭐ Title: </span>{data.title}</h2>
            <p className=""><span className="font-semibold">📄 Descriptin: </span>{data.shortDescription}</p>
            <p><span className="font-semibold">💰 Price: </span>{data.price}$</p>
            <p><span className="font-semibold">📈 Level: </span>{data.level}</p>
            <div className="space-x-3">
                <button className="text-white bg-blue-900 p-2 rounded-md" onClick={() => handleViewDetails(data.id)}>View Details</button>
                <button className="text-white bg-blue-900 p-2 rounded-md">Add To Cart</button>
            </div>
        </div>
    )
}
export default CardCourse