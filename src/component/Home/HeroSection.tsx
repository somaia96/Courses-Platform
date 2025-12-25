import laptop from "../../assets/hero-img.png";

const HeroSection = () => {
    const handleGetStarted = () => {
        window.location.href = "/courses"
    }
    return (
        <section className="flex container mb-10 py-10 flex-col rounded-2xl shadow-lg h-full lg:flex-row bg-white/50">
            <div className='flex-1 gap-5 flex flex-col justify-center items-center lg:items-start text-start space-y-5'>
                <h1 className="text-3xl lg:text-5xl font-bold text-blue-gray-900">Coursy Platform</h1>
                <h2 className="lg:text-xl text-center lg:text-left text-gray-600 w-3/4">Welcome To Our Online Courses Platform Where You Can To Grow With Us And Sharing Success Togather .</h2>
                <button onClick={handleGetStarted} className="hover:scale-105 text-white bg-gradient-to-r from-gray-600 to-blue-gray-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base text-xs lg:text-sm p-2 lg:px-4 lg:py-2.5 text-center leading-5 rounded-md">
                    Discover Courses
                </button>
            </div>
            <div className="flex-1 pr-5 flex justify-center items-center">
                <img className="w-1/2 sm:w-1/3 md:w-1/3 lg:w-full" src={laptop} alt="fish" />
            </div>
        </section>
    )
}
export default HeroSection