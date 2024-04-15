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
                    <p className="paragraph-content">Itinerary optimization is more than just efficiently organizing travel schedules. It's about creating journeys that resonate on a personal level with travelers, offering them a harmonious blend of adventure, relaxation, and cultural immersion. Travel agents must search through a vast ocean of travel options to deliver these bespoke experiences. With the help of LLMs, which consume vast quantities of data, travel agents will be able to include visits to hidden gems and experiences that offer glimpses at local life. Let’s get ready to see how this works!</p>
                    <img src={plane} alt="Plane going through mountains" className="w-[350px] mx-auto"/>
                    <h2 className="text-white font-semibold text-3xl">Case 1</h2>
                    <div className="bg-gray-900 p-2 rounded-md">
                        <p className="paragraph-content">Jessica, a 35-year-old adventurous solo traveler, is looking to explore the natural landscapes and cultural heritage of Japan over two weeks. As her travel agent, your job is to create the best itinerary that fits Jessica’s interests. There are many different factors to consider when crafting this itinerary. The following questions will guide you through the process of suggesting the perfect trip. Select the best answer to each question.</p>
                    </div>
                    <h2 className="text-white font-semibold text-3xl">Task 1: Determining Trip Details</h2>
                    <MCQuestion
                        question="What pieces of information might you request as the travel agent?"
                        answers={[
                            "Dates",
                            "Budget",
                            "Interests",
                            "A & B only",
                            "All of the above"
                        ]}
                        correctIndex={4}
                    />
                    <MCQuestion
                        question="Which of the following is Jessica least likely to be interested in based on her user profile?"
                        answers={[
                            "Cultural sites",
                            "Food experiences",
                            "Experiencing the outdoors",
                            "Pokémon tea café"
                        ]}
                        correctIndex={3}
                    />
                    <div className="bg-gray-900 p-2 rounded-md">
                        <p className="paragraph-content">Great job! Jessica has responded with her preferred travel dates, her budget, and her interest in outdoor activities, cultural sites and food experiences. Now, some of these categories, like outdoor activities and cultural sites, are still too broad. Some follow up questions might help in creating a more personalized trip.</p>
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
                        <p className="paragraph-content">After asking Jessica whether she prefers hiking or cycling, she responds that although she enjoys both activities, she would rather spend time biking. When asked about her interest in any festivals, she says that she would love to attend a local festival to gain a better understanding of Japanese culture. With all this new information in hand, an LLM like ChatGPT can now give us some ideas for the perfect itinerary.</p>
                    </div>
                    <h2 className="text-white font-semibold text-3xl">Task 3: Querying LLM for Trip Ideas</h2>
                    <MCQuestion
                        question="Which of the suggestions given by the LLM would fit Jessica’s ideal trip?"
                        answers={[
                            "Hiking up Mt. Fuji",
                            "Cycling through the Shimanami Kaido",
                            "Attending the Sapporo Snow Festival",
                            "A & B only",
                            "B & C only",
                            "All of the above"
                        ]}
                        correctIndex={4}
                    />
                    <MCQuestion
                        question="True or False: Jessica would enjoy the sushi-making class in Tokyo that ChatGPT also suggested?"
                        answers={[
                            "True",
                            "False"
                        ]}
                        correctIndex={0}
                    />
                    <MCQuestion
                        question="True or False: The historic temples in Kyoto would be a poor fit for Jessica’s trip itinerary?"
                        answers={[
                            "True",
                            "False"
                        ]}
                        correctIndex={1}
                    />
                    <div className="bg-gray-900 p-2 rounded-md">
                        <p className="paragraph-content">With all this information in mind, we can now provide Jessica with a travel itinerary. She will start her trip in Tokyo where she can participate in a sushi-making class. She will then travel north to Sapporo for the Sapporo Snow Festival. After attending the festival, she will then travel south to Kyoto to visit the historic temples located there. Finally, she will travel to Hiroshima, where she will be able to bike across the Shimanami Kaido. This itinerary will allow Jessica to explore all around Japan, while learning more about Japanese culture and participating in activities that interest her.</p>
                    </div> 
                </div>
            </main>
        </div>
    );
}

export default IOPage;