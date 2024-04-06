import { Link } from "react-router-dom";
import MCQuestion from "../components/MCQuestion";
import plane from "../assets/plane.jpg";

function IOPage() {
    return (
        <div className="bg-gray-800">
            <nav className="p-2 flex justify-between items-center bg-gray-900 shadow-lg">
                <Link to="/" className="text-4xl font-bold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">Trip Architect</Link>
                <div className="flex gap-4">
                    <Link to="/itinerary-optimization" className="text-blue-500 hover:text-blue-600 transition-all duration-200 ease-in-out font-bold">Itinerary Optimization</Link>
                    <Link to="/prompt-engineering" className="text-blue-500 hover:text-blue-600 transition-all duration-200 ease-in-out">Prompt Engineering</Link>
                    <Link to="/response-evaluation" className="text-blue-500 hover:text-blue-600 transition-all duration-200 ease-in-out">Response Evaluation</Link>
                </div>
            </nav>
            <main className="w-2/5 mx-auto mt-20 pb-20">
                <div className="flex flex-col gap-4">
                    <h1 className="text-white font-bold text-5xl">Itinerary Optimization</h1>
                    <p className="paragraph-content">Itinerary optimization more than just efficiently organizing travel schedules. It's about creating journeys that resonate on a personal level with travelers, offering them a harmonious blend of adventure, relaxation, and cultural immersion. Travel agents must search through a vast ocean of travel options to deliver these bespoke experiences. With the help of LLMs, which consume vast quantities of data, travel agents will be able to include visits to hidden gems and experiences that offer glimpses at local life. Let’s get ready to see how this works!</p>
                    <img src={plane} alt="Plane going through mountains" className="w-[350px] mx-auto"/>
                    <h2 className="text-white font-semibold text-3xl">Case 1</h2>
                    <div className="bg-gray-900 p-2 rounded-md">
                        <p className="paragraph-content">Jessica, a 35-year old adventurous solo traveler, is looking to explore the natural landscapes and cultural heritage of Japan over two weeks.</p>
                    </div>
                    <h2 className="text-white font-semibold text-3xl">Task 1: Determining Trip Details</h2>
                    <MCQuestion
                        question="What pieces of information might the travel agent request?"
                        answers={[
                            "Dates",
                            "Budget",
                            "Interests",
                            "A & B only",
                            "All of the above"
                        ]}
                        correctIndex={4}
                    />
                    <div className="bg-gray-900 p-2 rounded-md">
                        <p className="paragraph-content"><span className="font-bold">Initial Input: </span>Jessica enters her preferences, including her interest in outdoor activities, cultural sites, food experiences, her budget, and her travel dates.</p>
                    </div>
                    <h2 className="text-white font-semibold text-3xl">Task 2: Narrowing Down Interests</h2>
                    <MCQuestion
                        question="What might be some questions a travel agent might ask to create a more personalized itinerary?"
                        answers={[
                            "'Do you prefer hiking or cycling?'",
                            "'Are you interested in attending any festivals?'",
                            "'What is your favorite color?'",
                            "A & B only",
                            "A & C only"
                        ]}
                        correctIndex={3}
                    />
                    <div className="bg-gray-900 p-2 rounded-md">
                        <p className="paragraph-content"><span className="font-bold">Travel Agent: </span>Asks follow-up questions to narrow down preferences, such as "Do you prefer hiking or cycling?" and "Are you interested in attending any festivals?"</p>
                        <p className="paragraph-content"><span className="font-bold">User Response: </span>Jessica responds stating that she prefers cycling and would love to attend any local festivals.</p>
                        <p className="paragraph-content"><span className="font-bold">Travel Agent uses LLM: </span>Based on Jessica's inputs and its vast database of travel information, the LLM curates a personalized itinerary. It includes visits to the historic temples of Kyoto, cycling through the Shimanami Kaido, participating in a sushi-making class in Tokyo, and attending the Sapporo Snow Festival. The LLM also presents Jessica with other options, suggesting alternative activities, accommodations fitting her budget, and the best local dining spots, all woven into a seamless schedule. Jessica can then choose the trip options that sound the most appealing to her and the travel agent can help arrange the desired transportation and lodging.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default IOPage;