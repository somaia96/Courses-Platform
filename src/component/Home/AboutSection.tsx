import about from "../../assets/about-section.png"
const AboutSection = () => {
    return (
        <section className="my-20 bg-gray-50/70 py-20">
            <div className="container">
                <h2 className="text-3xl md:text-6xl text-center my-10 md:mt-5 md:mb-0 font-semibold">About US</h2>
                <div className="md:flex">
                    <div className="flex-1 gap-5 flex-col flex items-center text-center md:text-start md:items-start justify-center">
                        <h3 className="font-semibold text-xl md:text-3xl">Online Courses Platform</h3>
                        <p className="w-4/5 text-gray-800 md:text-lg">We provide a seamless learning experience for aspiring developers and designers. Our platform focuses on practical skills that the market demands.</p>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <img className="w-3/4 md:w-full" src={about} alt="about-section" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutSection