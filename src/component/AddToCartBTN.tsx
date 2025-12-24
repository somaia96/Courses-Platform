import { ICourses } from "@/interfaces"
import { addToCart } from "../utils/addToCart"

const AddToCartBTN = ({item}:{item:ICourses}) => {
return <button onClick={()=>addToCart(item)} className="text-blue-900 border border-blue-800  hover:text-white hover:bg-blue-900 p-2 rounded-md">Add To Cart</button>
}
export default AddToCartBTN