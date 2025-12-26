import { testimonials } from "../../data"
import TestCard from "./TestCard"

const Testimonials = () => {
    return (
        <section>
            <h2 className="text-center text-3xl md:text-5xl font-medium text-gray-800 mb-3">Testimonials</h2>
            <p className="text-center text-lg md:text-2xl text-gray-700 mb-20">
                Our Client Testimonials Lorem ipsum dolor sit amet c
            </p>
            <div className="container grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {testimonials.map(client=><TestCard key={client.id} client={client} />)}
            </div>
        </section>
    )
}
export default Testimonials