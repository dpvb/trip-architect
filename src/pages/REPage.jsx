import { Link } from "react-router-dom";
import MCQuestion from "../components/MCQuestion";
import detective from "../assets/detective.png";

function REPage() {
    return (
        <div className="bg-gray-800">
            <nav className="p-2 flex justify-between items-center bg-gray-900 shadow-lg">
                <Link to="/" className="text-4xl font-bold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">Trip Architect</Link>
                <div className="flex gap-4">
                    <Link to="/itinerary-optimization" className="text-blue-500 hover:text-blue-600 transition-all duration-200 ease-in-out">Itinerary Optimization</Link>
                    <Link to="/prompt-engineering" className="text-blue-500 hover:text-blue-600 transition-all duration-200 ease-in-out">Prompt Engineering</Link>
                    <Link to="/response-evaluation" className="text-blue-500 hover:text-blue-600 transition-all duration-200 ease-in-out font-bold">Response Evaluation</Link>
                </div>
            </nav>
            <main className="w-2/5 mx-auto mt-20 pb-20">
                <div className="flex flex-col gap-4">
                    <h1 className="text-white font-bold text-5xl">Response Evaluation</h1>
                    <p className="paragraph-content">Once an itinerary is created, it is important to assure that the itinerary created will match to the person it is created for. In an industry which assures that people get itineraries that will precisely match their wants and needs, it is important that as travel agents, you are able to pick out what may not be necessary or incorrect in an itinerary. When we add ChatGPT and LLMs in the feedback loop, it is even more important that we know how to “check its work”. Thus, this module aims to teach and help you practice how to sift through a response from an LLM and evaluate how valid that response is. Let's get learning!</p>
                    <img src={detective} alt="Magnifying glass." className="w-[350px] mx-auto"/>
                    <h2 className="text-white font-semibold text-3xl">Case 1</h2>
                    <div className="bg-gray-900 p-2 rounded-md">
                        <p className="paragraph-content">Sarah, a 25 year old hiking lover, wants to go on a cheap trip to sunny spots in Europe for 3 days.</p>
                    </div>
                    <h2 className="text-white font-semibold text-lg">LLM-Generated Trip Itinerary:</h2>
                    <div className="bg-gray-900 p-2 rounded-md">
                        <p className="paragraph-content font-semibold">Destination: Santorini, Greece</p>
                        <p className="paragraph-content font-semibold">Duration: 3 days</p>
                        <br/>
                        <p className="paragraph-content font-semibold">Day 1: Arrival & Perissa Beach</p>
                        <ul className="paragraph-content list-disc pl-[1em] ml-[1em]">
                            <li>Arrive at Santorini Airport and head to Perissa Beach.</li>
                            <li>Relax on the black sand beach and enjoy a seafood dinner.</li>
                        </ul>
                        <br/>
                        <p className="paragraph-content font-semibold">Day 2: Oia & Fira</p>
                        <ul className="paragraph-content list-disc pl-[1em] ml-[1em]">
                            <li>Explore Oia's charming streets and watch the sunset.</li>
                            <li>Visit Fira, take a cable car ride, and enjoy dinner by the caldera.</li>
                        </ul>
                        <br/>
                        <p className="paragraph-content font-semibold">Day 3: Catamaran Cruise</p>
                        <ul className="paragraph-content list-disc pl-[1em] ml-[1em]">
                            <li>Sail around Santorini, swim, snorkel, and visit hot springs.</li>
                            <li>Barbecue lunch on board and relax at your hotel.</li>
                        </ul>
                    </div>
                    <h2 className="text-white font-semibold text-3xl">Task 1: Extract Important Details from Response</h2>
                    <MCQuestion
                        question="Pick out information from the LLMs response to Sarah’s prospective itinerary that is INCORRECT for her."
                        answers={[
                            "Length of stay (3 days)",
                            "Number of locations (3)",
                            "Low budget and interests met (cheap, hiking, and sunny spots)",
                            "Location matching (Europe)",
                        ]}
                        correctIndex={2}
                    />
                    <h2 className="text-white font-semibold text-3xl">Task 2: Should this Itinerary be Changed?</h2>
                    <MCQuestion
                        question="Given Sarah's preferences and the response generated by the LLM, should we ask the LLM to make any changes?"
                        answers={[
                            "Yes",
                            "No",
                        ]}
                        correctIndex={0}
                    />
                    <h2 className="text-white font-semibold text-3xl">Task 3: Prompt the LLM to Fix the Itinerary</h2>
                    <MCQuestion
                        question="Which of these prompts should we use to ask ChatGPT to fix Sarah's itinerary?"
                        answers={[
                            "Add more events to the itinerary in Greece to make the trip longer.",
                            "Account for Sarah's interests, sun and hiking, along with her lower budget.",
                            "Add activities outside of Europe to this itinerary.",
                            "Don’t change the activities for this itinerary but switch the order in which they are done.",
                        ]}
                        correctIndex={1}
                    />
                </div>
            </main>
        </div>
    );
}

export default REPage;