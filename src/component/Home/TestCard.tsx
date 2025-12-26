import { ITestimonials } from "@/interfaces"
import { Quote } from "lucide-react"

const TestCard = ({ client }: { client: ITestimonials }) => {
    return (
        <div className="text-gray-700 rounded-md bg-blue-100/10 shadow-lg p-5 pt-20 relative flex flex-col gap-5 justify-center">
            <div className="w-20 h-20 flex justify-center items-center rounded-full overflow-hidden border-4 border-gray-300 shadow-lg absolute left-1/2 -translate-x-1/2 -top-5">
                <img className="w-full" src={client.avatar} alt={client.name} />
            </div>
            <p className="relative text-sm">

                <Quote className="inline-block mr-1" color="red" size={10} strokeWidth={1} />

                {client.comment}

                <Quote className="inline-block ml-1" color="red" size={10} strokeWidth={1} />

            </p>
            <p className="text-xs text-gray-800 font-medium">
                {client.name} <span className="text-red-500">{client.role} in {client.company}</span>
            </p>
        </div>
    )
}
export default TestCard