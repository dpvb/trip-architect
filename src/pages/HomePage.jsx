import { Link } from "react-router-dom";

function HomePage() {
    return (
        <section className="bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 h-screen">
                <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 text-4xl font-extrabold tracking-tight leading-non md:text-5xl lg:text-6xl">Trip Architect</h1>
                <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-gray-400">Teaching travel agents to leverage AI tools for trip planning.</p>
                <div className="flex flex-col justify-center w-full sm:w-80 mx-auto gap-4">
                    <Link to="/itinerary-optimization" className="block w-auto rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring transition-all duration-200 ease-in">Itinerary Optimization</Link>
                    <Link to="/prompt-engineering" className="block w-auto rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring transition-all duration-200 ease-in">Prompt Engineering</Link>
                    <Link to="/response-evaluation" className="block w-auto rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring transition-all duration-200 ease-in">Response Evaluation</Link>
                </div>
                <div className="mt-6 border-blue-600 border-[1px] w-[400px] mx-auto p-2 rounded-md">
                    {/* <h2 className="text-lg text-gray-400">Purpose</h2> */}
                    <p className="text-gray-400">At Trip Architect, we give trip advisors and planners the tools needed to better plan for customer's trips. Using generative AI and the skills you learn here, you will be able to use LLMs like ChatGPT to construct trip itineraries for any traveler! Take advantage of our 3 modules to learn how to integrate AI into your workflow to effectively craft a trip that your customers will love!</p>
                </div>
            </div>
        </section>
    )
}

export default HomePage;