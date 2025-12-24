import { ICourses } from "../interfaces"
import { ChartNoAxesColumnIncreasing, CircleDollarSign, GraduationCap } from 'lucide-react';
import AddToCartBTN from "./AddToCartBTN";

const CardCourse = ({ data }: { data: ICourses }) => {
    const handleViewDetails = (id: number) => {
        window.location.href = `/courses/${id}`
    }
    return (
        <div className="h-full rounded-md relative shadow-md bg-white/20 pt-5">
            <p style={{backgroundColor:data.level === "Beginner"?"#667efa9e":data.level === "Advanced"?"#66fa969e":"#f87fff87",color:data.level === "Beginner"?"#1b1bff":data.level === "Advanced"?"#007b0e":"#f332f4"}} className="text-sm shadow-sm font-semibold py-1 absolute top-0 left-0 w-full rounded-t-md flex justify-center items-center"><ChartNoAxesColumnIncreasing strokeWidth={3} height={15} />{data.level}</p>
            <div className="bg-gray-200 px-3 py-5">
                
                <h2 className="text-lg font-semibold flex gap-2"><GraduationCap />{data.title}</h2>
                <p className="text-gray-800">{data.shortDescription}</p>
            </div>
            <p className="p-3 text-sm flex gap-1"><span className="gap-x-0.5 flex items-center font-semibold text-gray-800"><CircleDollarSign color="blue" size={15} /> Price: </span>{data.price}$</p>
            <div className="flex text-white space-x-3 p-3 text-xs">
                <button className="bg-blue-900 p-2 rounded-md" onClick={() => handleViewDetails(data.id)}>View Details</button>
                <AddToCartBTN item={data} />
            </div>
        </div>
    )
}
export default CardCourse