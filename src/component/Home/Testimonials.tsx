import { testimonials } from "../../data"
import TestCard from "./TestCard"

const Testimonials = () => {
    return (
        <section className="py-20">
            <div className="container grid grid-cols-1 md:grid-cols-3">
                {testimonials.map(client=><TestCard key={client.id} client={client} />)}
            </div>
        </section>
    )
}
export default Testimonials