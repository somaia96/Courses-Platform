import { ICourses } from "@/interfaces"
import { addToCart } from "../utils/addToCart"
import BTN from "./BTN"

const AddToCartBTN = ({ item }: { item: ICourses }) => {
    return <BTN
    className="lg:text-xs"
        handleClick={() => addToCart(item)}>
        Add To Cart
    </BTN>
}
export default AddToCartBTN