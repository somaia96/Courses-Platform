import { getLoggedInFun } from "../utils/isLoggedInFun"

const CartPage = () => {
    return (
        getLoggedInFun()? <div>
            CartPage
        </div>:<h2 className="text-5xl text-center mt-10 font-semibold">Please Login First</h2>
    )
}
export default CartPage