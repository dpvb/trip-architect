import { Link } from "react-router-dom";
import MCQuestion from "../components/MCQuestion";

function PEPage() {
    return (
        <div className="bg-gray-800">
            <nav className="p-2 flex justify-between items-center bg-gray-900 shadow-lg">
                <Link to="/" className="text-4xl font-bold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">Trip Architect</Link>
                <div className="flex gap-4">
                    <Link to="/itinerary-optimization" className="text-blue-500 hover:text-blue-600 transition-all duration-200 ease-in-out">Itinerary Optimization</Link>
                    <Link to="/prompt-engineering" className="text-blue-500 hover:text-blue-600 transition-all duration-200 ease-in-out font-bold">Prompt Engineering</Link>
                    <Link to="/response-evaluation" className="text-blue-500 hover:text-blue-600 transition-all duration-200 ease-in-out">Response Evaluation</Link>
                </div>
            </nav>
            <main className="w-1/3 mx-auto mt-20 pb-20">
                <div className="flex flex-col gap-4">
                    <h1 className="text-white font-bold text-5xl">Prompt Engineering</h1>
                    <p className="paragraph-content">The travel industry is undergoing a transformation!  Language learning models (LLMs) are emerging as powerful tools to personalize trip planning for your clients.  But to unlock their full potential, you need to be an expert in crafting the right questions and prompts.  This interactive exercise will equip you with the skills to become a master "prompt engineer," allowing you to extract key details from customer conversations and translate them into effective LLM queries.  Get ready to dive deep, understand your clients' hidden desires, and design dream vacations that exceed their expectations!</p>
                    <h2 className="text-white font-semibold text-3xl">Case 1: Sarah's Spa Escape for Relaxation and Renewal</h2>
                    <p className="paragraph-content"><span className="font-bold">Customer: </span>Hey there! Sarah here, and I'm itching for a getaway later this year!  This city life is burning me out, so I'm in desperate need of some serious relaxation.  Dreaming of somewhere with stunning beaches and crystal-clear water, maybe even with yoga retreats or meditation classes to really unwind.</p>
                    <p className="paragraph-content"><span className="font-bold">Travel Agent: </span>Hi Sarah, that sounds wonderful! Relaxation is definitely needed sometimes. Where have you traveled to in the past?</p>
                    <p className="paragraph-content"><span className="font-bold">Customer: </span>Well, I went to Paris a few years ago, and that was amazing! But it was very fast-paced. I also did a backpacking trip through Southeast Asia after college, which was a lot of fun, but a little too adventurous for what I'm looking for right now.</p>
                    <p className="paragraph-content"><span className="font-bold">Travel Agent: </span>Interesting! So, it seems like you enjoy beautiful scenery but also appreciate some structure and activities you can participate in?</p>
                    <p className="paragraph-content"><span className="font-bold">Customer: </span>Exactly! I wouldn't mind a little pampering either. You know, luxurious resorts or spas wouldn't go amiss!</p>
                    <p className="paragraph-content"><span className="font-bold">Travel Agent: </span>Great! Budget-wise, do you have a specific range in mind?</p>
                    <p className="paragraph-content"><span className="font-bold">Customer: </span>Hmm, well, I'm willing to splurge a little for this trip. Let's say somewhere between $5,000 and $7,000 for the whole thing, flights and all.</p>
                    <h2 className="text-white font-semibold text-3xl">Task 1: Decoding Traveler Talk</h2>
                    <p className="paragraph-content">Now that you've interacted with Sarah, let's delve deeper into her travel preferences. You'll be asked various multiple choice questions to test whether you accurately extracted relevant details from the conversation above.</p>
                    <MCQuestion
                        question="Based on Sarah's description, what are her top travel priorities?"
                        answers={[
                            "A vacation centered entirely on relaxation.",
                            "Answer choice 2",
                            "Answer choice 3",
                        ]}
                        correctIndex={0}
                    />
                </div>
            </main>
        </div>
    );
}
/**
 *  <p className="paragraph-content"><span className="font-bold"></span></p>
 */

export default PEPage;