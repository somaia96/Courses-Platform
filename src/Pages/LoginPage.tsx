import BTN from "../component/BTN"
import Input from "../component/Input"
import { setLoggedInFun } from "../utils/isLoggedInFun"
import { useState } from "react"

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!email || !password) return;
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setLoggedInFun(true)
            window.location.href = "/"
        }, 2000);
    }
    return (
        <div className="flex justify-center h-screen items-center">
            <form onSubmit={handleSubmit} className="flex w-3/4 sm:w-1/2 lg:w-1/3 rounded-md p-10 flex-col bg-gray-500/10 gap-5 text- shadow-lg">
                <h2 className="text-center text-5xl font-[cursive] text-blue-gray-900 font-semibold mb-3">Login</h2>
                <Input value={email} name="email" placeholder="example@gmail.com" setter={setEmail} />
                <Input value={password} name="password" placeholder="Enter Your Password" setter={setPassword} />
                <BTN>
                    {isLoading ? "Loading..." : "LogIn"}
                </BTN>
           </form>
        </div>
    )
}
export default LoginPage