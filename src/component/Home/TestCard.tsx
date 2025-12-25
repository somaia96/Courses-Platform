import { ITestimonials } from "@/interfaces"

const TestCard = ({client}:{client:ITestimonials}) => {
    return (
        <div>
            {client.name}
        </div>
    )
}
export default TestCard