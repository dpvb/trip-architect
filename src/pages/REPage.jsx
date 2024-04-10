import { Link } from "react-router-dom";
import MCQuestion from "../components/MCQuestion";
import detective from "../assets/detective.png"; 
import gpt1_1 from "../assets/gpt1_1.png";
import gpt1_2 from "../assets/gpt1_2.png";
import gpt1_3 from "../assets/gpt1_3.png";
import gpt2_1 from "../assets/gpt2_1.png";
import gpt2_2 from "../assets/gpt2_2.png";
import gpt2_3 from "../assets/gpt2_3.png";
import gpt3_1 from "../assets/gpt3_1.png";
import gpt3_2 from "../assets/gpt3_2.png";
import gpt3_3 from "../assets/gpt3_3.png";

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
            <main className="lg:w-1/3 w-11/12 mx-auto mt-20 pb-20">
                <div className="flex flex-col gap-4">
                    <h1 className="text-white font-bold text-5xl">Response Evaluation</h1>
                    <p className="paragraph-content">Once an itinerary is created, it is important to assure that the itinerary created will match to the person it is created for. In an industry which assures that people get itineraries that will precisely match their wants and needs, it is important that as travel agents, you are able to pick out what may not be necessary or incorrect in an itinerary. When we add ChatGPT and LLMs in the feedback loop, it is even more important that we know how to “check its work”. Thus, this module aims to teach and help you practice how to sift through a response from an LLM and evaluate how valid that response is. Let's get learning!</p>
                    <img src={detective} alt="Magnifying glass." className="w-[350px] mx-auto"/>
                    <h2 className="text-white font-semibold text-3xl">Case 1</h2>
                    <div className="bg-gray-900 p-2 rounded-md">
                        <p className="paragraph-content">Sarah, a 25 year old hiking lover, wants to go on a cheap trip to sunny spots in Europe for 3 days. You need to read the following ChatGPT responses and evaluate whether the itinerary was created to meet her needs.</p>
                    </div>
                    <h2 className="text-white font-semibold text-lg">LLM-Generated Trip Itinerary:</h2>
                    <img src={gpt1_1} alt="ChatGPT response." className="w-full mx-auto"/>
                    <img src={gpt1_2} alt="ChatGPT response." className="w-full mx-auto"/>
                    <img src={gpt1_3} alt="ChatGPT response." className="w-full mx-auto"/>
                    <h2 className="text-white font-semibold text-3xl">Task 1: Extract Important Details from Response</h2>
                    <MCQuestion
                        question="Pick out the most important information from the LLMs response giving Sarah a prospective itinerary."
                        answers={[
                            "Length of stay (3 days)",
                            "Number of locations (3)",
                            "Low budget and interests met (cheap, hiking, and sunny spots)",
                            "Location matching (Europe)",
                        ]}
                        correctIndex={3}
                    />
                    <h2 className="text-white font-semibold text-3xl">Task 2: Determine Which Factors Need To Be Fixed</h2>
                    <MCQuestion
                        question="Given Sarah’s itinerary, which of the following factors has the LLM not correctly accounted for?"
                        answers={[
                            "Area of travel",
                            "Low budget",
                            "Interests",
                            "Length of stay"
                        ]}
                        correctIndex={2}
                    />
                    <h2 className="text-white font-semibold text-3xl">Task 3: Determine If This Itinerary Should Be Changed</h2>
                    <MCQuestion
                        question="Given Sarah’s itinerary created by ChatGPT, should we ask ChatGPT to make any changes?"
                        answers={[
                            "Yes",
                            "No",
                        ]}
                        correctIndex={0}
                    />
                    <h2 className="text-white font-semibold text-3xl">Task 4: Prompt ChatGPT to Fix the Itinerary</h2>
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

                    <h2 className="text-white font-semibold text-3xl">Case 2</h2>
                    <div className="bg-gray-900 p-2 rounded-md">
                        <p className="paragraph-content">Maya is a 60-year-old nature enthusiast who adores breathtaking landscapes and outdoor adventures. She seeks to explore destinations in Ireland for a rejuvenating 1-day getaway. You need to read the following ChatGPT responses and evaluate whether the itinerary was created to meet her needs.</p>
                    </div>
                    <h2 className="text-white font-semibold text-lg">LLM-Generated Trip Itinerary:</h2>
                    <img src={gpt2_1} alt="ChatGPT response." className="w-full mx-auto"/>
                    <img src={gpt2_2} alt="ChatGPT response." className="w-full mx-auto"/>
                    <img src={gpt2_3} alt="ChatGPT response." className="w-full mx-auto"/>
                    <h2 className="text-white font-semibold text-3xl">Task 1: Extract Important Details from Response</h2>
                    <MCQuestion
                        question="Pick out the most important information from the LLMs response given Maya's prospective itinerary."
                        answers={[
                            "Length of stay (1 day)",
                            "Number of locations (1)",
                            "Age appropriate",
                            "Location matching (Europe)",
                        ]}
                        correctIndex={3}
                    />
                    <h2 className="text-white font-semibold text-3xl">Task 2: Determine Which Factors Need To Be Fixed</h2>
                    <MCQuestion
                        question="Given Maya’s itinerary, which of the following factors has the LLM not correctly accounted for?"
                        answers={[
                            "Area of travel",
                            "Activities for age",
                            "Interests",
                            "None of the Above"
                        ]}
                        correctIndex={3}
                    />
                    <h2 className="text-white font-semibold text-3xl">Task 3: Determine If This Itinerary Should Be Changed</h2>
                    <MCQuestion
                        question="Given Maya’s itinerary created by ChatGPT, should we ask ChatGPT to make any changes?"
                        answers={[
                            "Yes",
                            "No",
                        ]}
                        correctIndex={1}
                    />
                    <h2 className="text-white font-semibold text-3xl">Task 4: Prompt ChatGPT to Fix the Itinerary</h2>
                    <MCQuestion
                        question="What should we do moving forward with Maya’s itinerary with respect to ChatGPT?"
                        answers={[
                            "Add more events to the itinerary in Ireland to make the trip longer.",
                            "Account for Maya’s age more, ensuring there are activities for kids to participate in.",
                            "Add activities outside of Europe to this itinerary.",
                            "Don’t change the activities for this itinerary or ask ChatGPT to make changes, but assure you run the itinerary by Maya and make additional changes if needed.",
                        ]}
                        correctIndex={3}
                    />

                    <h2 className="text-white font-semibold text-3xl">Case 3</h2>
                    <div className="bg-gray-900 p-2 rounded-md">
                        <p className="paragraph-content">I'm organizing a surprise birthday outing for my friend Mark, who is turning 40 this weekend. He's a history buff with a passion for ancient architecture and cultural heritage. Can you recommend a unique day trip destination in Italy that would cater to his interests? You need to read the following ChatGPT responses and evaluate whether the itinerary was created to meet her needs.</p>
                    </div>
                    <h2 className="text-white font-semibold text-lg">LLM-Generated Trip Itinerary:</h2>
                    <img src={gpt3_1} alt="ChatGPT response." className="w-full mx-auto"/>
                    <img src={gpt3_2} alt="ChatGPT response." className="w-full mx-auto"/>
                    <img src={gpt3_3} alt="ChatGPT response." className="w-full mx-auto"/>
                    <h2 className="text-white font-semibold text-3xl">Task 1: Extract Important Details from Response</h2>
                    <MCQuestion
                        question="Pick out the most important information from the LLMs response given Mark's prospective itinerary."
                        answers={[
                            "Length of stay (1 day)",
                            "Number of locations (1)",
                            "Age appropriate",
                            "Location matching (Europe)",
                        ]}
                        correctIndex={3}
                    />
                    <h2 className="text-white font-semibold text-3xl">Task 2: Determine Which Factors Need To Be Fixed</h2>
                    <MCQuestion
                        question="Given Mark's itinerary, which of the following factors has the LLM not correctly accounted for?"
                        answers={[
                            "Area of travel",
                            "Activities for age",
                            "Interests",
                            "Incorrect locations matched with activities"
                        ]}
                        correctIndex={3}
                    />
                    <h2 className="text-white font-semibold text-3xl">Task 3: Determine If This Itinerary Should Be Changed</h2>
                    <MCQuestion
                        question="Given Mark’s itinerary created by ChatGPT, should we ask ChatGPT to make any changes?"
                        answers={[
                            "Yes",
                            "No",
                        ]}
                        correctIndex={0}
                    />
                    <h2 className="text-white font-semibold text-3xl">Task 4: Prompt ChatGPT to Fix the Itinerary</h2>
                    <MCQuestion
                        question="Which of these prompts should we use to ask ChatGPT to fix Mark's Itinerary?"
                        answers={[
                            "Add more events to the itinerary in Italy to make the trip longer.",
                            "Revise this itinerary to focus on modern art museums and Japanese cuisine for Mark's birthday trip to Italy.",
                            "Add activities outside of Europe to this itinerary.",
                            "Correct the locations matched with the activities, as you have mismatched Roman attractions with being in Pompeii several times, referred to a Roman dish as one from Pompeii, etc.",
                        ]}
                        correctIndex={3}
                    />
                </div>
            </main>
        </div>
    );
}

export default REPage;