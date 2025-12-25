import laptop from "../../assets/hero-img.png";
import BTN from "../BTN";

const HeroSection = () => {
    const handleGetStarted = () => {
        window.location.href = "/courses"
    }
    return (
        <section className="flex container mb-10 py-10 flex-col rounded-2xl shadow-lg h-full lg:flex-row bg-white/50">
            <div className='flex-1 gap-5 flex flex-col justify-center items-center lg:items-start text-start space-y-5'>
                <h1 className="text-3xl lg:text-5xl font-bold text-blue-gray-900">Coursy Platform</h1>
                <h2 className="lg:text-xl text-center lg:text-left text-gray-600 w-3/4">
                Welcome To Our Online Courses Platform Where You Can To Grow With Us And Sharing Success Togather .
                </h2>
                <BTN handleClick={handleGetStarted}>
                    Discover Courses
                </BTN>
            </div>
            <div className="flex-1 pr-5 flex justify-center items-center">
                <img className="w-1/2 sm:w-1/3 md:w-1/3 lg:w-full" src={laptop} alt="fish" />
            </div>
        </section>
    )
}
export default HeroSection