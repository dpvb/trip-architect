import { Link } from "react-router-dom";
import MCQuestion from "../components/MCQuestion";
import beach from "../assets/beach.jpg";
import safari from "../assets/safari.png";
import mountain from "../assets/mountain.png";
import lake from "../assets/lake.png";
import savannah from "../assets/savannah.png";
import books from "..//assets/books.png";

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
            <main className="w-2/5 mx-auto mt-20 pb-20">
                <div className="flex flex-col gap-4">
                    <h1 className="text-white font-bold text-5xl">Prompt Engineering</h1>
                    <p className="paragraph-content">The travel industry is undergoing a transformation!  Language learning models (LLMs) are emerging as powerful tools to personalize trip planning for your clients.  But to unlock their full potential, you need to be an expert in crafting the right questions and prompts.  This interactive exercise will equip you with the skills to become a master "prompt engineer," allowing you to extract key details from customer conversations and translate them into effective LLM queries.  Get ready to dive deep, understand your clients' hidden desires, and design dream vacations that exceed their expectations!</p>
                    <h2 className="text-white font-semibold text-3xl">What is Prompt Engineering?</h2>
                    <p className="paragraph-content">A <span className="font-bold">prompt</span> in the context of using language models can be viewed as a question or instruction. It's what you provide to the program to guide it in performing a specific task. For travel agents like you, prompts can be requests like asking for the best hotels in a particular city or seeking an itinerary for a client's vacation.</p>
                    <p className="paragraph-content"><span className="font-bold">Prompt engineering</span>, on the other hand, is the systematic process of creating well-crafted prompts that yield optimal results from the language models. It involves not just asking a question but carefully designing the language, structure, and content of the prompt. This ensures that the program understands the agent's intent accurately and provides the most relevant and useful information for travel planning. Essentially, prompt engineering is about fine-tuning how you communicate with the program to get the best outcomes for your clients.</p>
                    <img src={beach} alt="Woman on a beach" className="w-[350px] mx-auto"/>
                    <h2 className="text-white font-semibold text-3xl">Case 1: Sarah's Spa Escape for Relaxation and Renewal</h2>
                    <div className="bg-gray-900 p-2 rounded-md">
                        <p className="paragraph-content"><span className="font-bold">Customer: </span>Hey there! Sarah here, and I'm itching for a getaway later this year!  This city life is burning me out, so I'm in desperate need of some serious relaxation.  Dreaming of somewhere with stunning beaches and crystal-clear water, maybe even with yoga retreats or meditation classes to really unwind.</p>
                        <p className="paragraph-content"><span className="font-bold">Travel Agent: </span>Hi Sarah, that sounds wonderful! Relaxation is definitely needed sometimes. Where have you traveled to in the past?</p>
                        <p className="paragraph-content"><span className="font-bold">Customer: </span>Well, I went to Paris a few years ago, and that was amazing! But it was very fast-paced. I also did a backpacking trip through Southeast Asia after college, which was a lot of fun, but a little too adventurous for what I'm looking for right now.</p>
                        <p className="paragraph-content"><span className="font-bold">Travel Agent: </span>Interesting! So, it seems like you enjoy beautiful scenery but also appreciate some structure and activities you can participate in?</p>
                        <p className="paragraph-content"><span className="font-bold">Customer: </span>Exactly! I wouldn't mind a little pampering either. You know, luxurious resorts or spas wouldn't go amiss!</p>
                        <p className="paragraph-content"><span className="font-bold">Travel Agent: </span>Great! Budget-wise, do you have a specific range in mind?</p>
                        <p className="paragraph-content"><span className="font-bold">Customer: </span>Hmm, well, I'm willing to splurge a little for this trip. Let's say somewhere between $5,000 and $7,000 for the whole thing, flights and all.</p>
                    </div>
                    <img src={mountain} alt="Mountain" className="w-[350px] mx-auto"/>
                    <h2 className="text-white font-semibold text-3xl">Task 1: Decoding Sarah's Dream Escape</h2>
                    <p className="paragraph-content">Now that you've interacted with Sarah, it's time to become a travel industry Sherlock Holmes!  This is where your skills as a prompt engineer truly come into play.  By dissecting the conversation you just had, let's uncover the key details that will craft the perfect travel itinerary.</p>
                    <p className="paragraph-content">Your Mission: Become a travel agent detective and use the clues from the conversation to identify Sarah’s travel desires. Choose the BEST answer for each category.</p>
                    <MCQuestion
                        question="What is Sarah's primary goal for this trip?"
                        answers={[
                            "Sightseeing and cultural experiences",
                            "Relaxation and stress relief",
                            "Adventure and exploration",
                            "Shopping and nightlife"
                        ]}
                        correctIndex={1}
                    />
                    <MCQuestion
                        question="What kind of scenery is most appealing to Sarah?"
                        answers={[
                            "Bustling cityscapes",
                            "Mountain ranges and forests",
                            "Beautiful beaches and ocean views",
                            "Historical landmarks and ruins"
                        ]}
                        correctIndex={2}
                    />
                    <MCQuestion
                        question="Aside from relaxation, what activities is Sarah interested in?"
                        answers={[
                            "Extreme sports and adrenaline rushes",
                            "Yoga, meditation, and wellness classes",
                            "Clubbing and partying",
                            "Shopping and fine dining"
                        ]}
                        correctIndex={1}
                    />
                    <MCQuestion
                        question="Based on Sarah's past trips, what kind of travel experiences does she seem to prefer?"
                        answers={[
                            "Solo backpacking adventures",
                            "Group tours with fixed itineraries",
                            "A mix of relaxation and some structured activities",
                            "Fast-paced sightseeing trips with minimal downtime"
                        ]}
                        correctIndex={2}
                    />
                    <MCQuestion
                        question="Beyond relaxation, is there any interest in incorporating local culture into the experience? Does she enjoy trying new foods or experiencing local customs?"
                        answers={[
                            "She'd prefer to focus solely on relaxation and avoid cultural activities.",
                            "She’s open to trying some local cuisine, but cultural experiences aren't important.",
                            "Light cultural immersion would be nice, as long as relaxation remains the priority.",
                            "Absolutely! Helping her immerse in local culture would enhance her experience."
                        ]}
                        correctIndex={2}
                    />
                    <MCQuestion
                        question="What is Sarah's estimated budget for this trip, including flights?"
                        answers={[
                            "Below $3,000",
                            "$3,000 - $5,000",
                            "$5,000 - $7,000",
                            "Above $7,000"
                        ]}
                        correctIndex={2}
                    />
                    <MCQuestion
                        question="Does Sarah show any interest in luxurious travel experiences?"
                        answers={[
                            "No, she prioritizes budget-friendly options.",
                            "Yes, she mentions an interest in luxury resorts and spas.",
                            "It's unclear from the conversation.",
                            "She specifically mentions avoiding expensive hotels."
                        ]}
                        correctIndex={1}
                    />
                    <img src={books} alt="Books" className="w-[350px] mx-auto"/>
                    <h2 className="text-white font-semibold text-3xl">Task 2: Be the Prompt Master!</h2>
                    <p className="paragraph-content">Now you've identified your client's travel desires, it's time to translate them into an LLM superpower! This step involves crafting the perfect prompt, a magic spell that unlocks a world of personalized travel options.</p>
                    <p className="paragraph-content">The provided prompt acts as a template, with key details missing. Here's the exciting part –  you'll fill in the blanks based on the keywords you extracted from the client conversation. Choose the BEST answer to fill in each blank of the provided template.</p>
                    <div className="bg-gray-900 p-2 rounded-md">
                        <p className="paragraph-content"><span className="font-bold">Prompt:</span> Suggest travel destinations in <span className="font-bold">[Region]</span> that cater to <span className="font-bold">[Priority-1]</span>, featuring <span className="font-bold">[Priority-2]</span> and opportunities for <span className="font-bold">[Priority-3]</span>.  If possible, incorporate options for <span className="font-bold">[Travel Style]</span> that align with the client's past travels. Prioritize destinations with <span className="font-bold">[Budget]</span> accommodations that fit within the client's budget of luxury resort or spa.</p>
                    </div>
                    <MCQuestion
                        question="Region:"
                        answers={[
                            "The bustling cityscapes of Europe",
                            "The historical landmarks of South America",
                            "The tropical paradises of the Caribbean Islands",
                            "The adventurous trails of Southeast Asia"
                        ]}
                        correctIndex={2}
                    />
                    <MCQuestion
                        question="Priority-1:"
                        answers={[
                            "Sightseeing and cultural experiences",
                            "Relaxation and stress relief",
                            "Adventure and exploration",
                            "Shopping and nightlife"
                        ]}
                        correctIndex={1}
                    />
                    <MCQuestion
                        question="Priority-2:"
                        answers={[
                            "Mountain ranges and forests",
                            "Beautiful beaches and ocean views",
                            "Bustling cityscapes",
                            "Historical landmarks and ruins"
                        ]}
                        correctIndex={1}
                    />
                    <MCQuestion
                        question="Priority-3:"
                        answers={[
                            "Yoga, meditation, and wellness classes",
                            "Extreme sports and adrenaline rushes",
                            "Clubbing and partying",
                            "Shopping and fine dining"
                        ]}
                        correctIndex={0}
                    />
                    <MCQuestion
                        question="Travel Style:"
                        answers={[
                            "Solo backpacking adventures",
                            "Group tours with fixed itineraries",
                            "Fast-paced sightseeing trips with minimal downtime",
                            "A mix of relaxation and some structured activities"
                        ]}
                        correctIndex={3}
                    />
                    <MCQuestion
                        question="Budget:"
                        answers={[
                            "Below $3,000",
                            "$3,000 - $5,000",
                            "$5,000 - $7,000",
                            "Above $7,000"
                        ]}
                        correctIndex={2}
                    />
                    <h2 className="text-white font-semibold text-3xl">Case 2: Unveiling David's Dream Wildlife Adventure</h2>
                    <img src={safari} alt="Safari with zebras" className="w-[350px] mx-auto"/>
                    <div className="bg-gray-900 p-2 rounded-md">
                        <p className="paragraph-content"><span className="font-bold">Customer: </span>Hi there! My name is David, and I'm looking for an adventure this year. I'm not a huge fan of sitting on the beach all day, but I do enjoy the outdoors and exploring new cultures. I've always been fascinated by wildlife, and seeing animals in their natural habitat would be a dream come true.  Budget-wise, I'm flexible, but I'd prefer to keep it under $10,000 for a two-week trip.</p>
                        <p className="paragraph-content"><span className="font-bold">Travel Agent: </span>That sounds exciting, David! Have you ever done any wildlife safaris before?</p>
                        <p className="paragraph-content"><span className="font-bold">Customer: </span>No, I haven't. That's actually what I'm hoping to experience on this trip.  I'm particularly interested in seeing things like lions, elephants, and maybe even gorillas if that's possible.</p>
                        <p className="paragraph-content"><span className="font-bold">Travel Agent: </span>Interesting! It sounds like you'd enjoy an African safari. Would you be interested in a more rustic camping experience or something with more luxurious accommodations?</p>
                        <p className="paragraph-content"><span className="font-bold">Customer: </span>Hmm, well, I'm definitely up for an adventure, but a comfortable bed and some good food wouldn't hurt either!</p>
                    </div>
                    <img src={lake} alt="Lake" className="w-[350px] mx-auto"/>
                    <h2 className="text-white font-semibold text-3xl">Task 1: Decoding David's Wildlife Adventure</h2>
                    <p className="paragraph-content">Now that you've interacted with David, it's time to become a travel industry Sherlock Holmes!  This is where your skills as a prompt engineer truly come into play.  By dissecting the conversation you just had, let's uncover the key details that will craft the perfect travel itinerary.</p>
                    <p className="paragraph-content">Your Mission: Become a travel agent detective and use the clues from the conversation to identify David’s travel desires. Choose the BEST answer for each category.</p>
                    <MCQuestion
                        question="What is David's primary focus for this trip?"
                        answers={[
                            "Relaxation and beach lounging",
                            "Cultural immersion and historical exploration",
                            "Shopinng and nightlife",
                            "Wildlife viewing and safaris"
                        ]}
                        correctIndex={3}
                    />
                    <MCQuestion
                        question="Aside from wildlife, does David express any other interests for this trip?"
                        answers={[
                            "David is solely focused on wildlife and has no interest in cultural experiences.",
                            "David enjoys the outdoors and exploring new cultures alongside wildlife viewing.",
                            "David prioritizes luxurious experiences over cultural exploration.",
                            "David prefers relaxing on the beach with occasional cultural experiences."
                        ]}
                        correctIndex={1}
                    />
                    <MCQuestion
                        question="Based on David's preferences, what kind of travel experience is he most likely interested in?"
                        answers={[
                            "Relaxing beach vacation with minimal activity",
                            "Fast-paced sightseeing tour with minimal downtime",
                            "Budget-friendly backpacking adventure with basic accommodations",
                            "Active travel with exploration and some luxury elements"
                        ]}
                        correctIndex={3}
                    />
                    <MCQuestion
                        question="Does David seem more open to a solo adventure or a guided safari experience?"
                        answers={[
                            "A mix of independent exploration and some guided activities would be ideal.",
                            "David prefers complete independence and planning his own itinerary.",
                            "David would feel most comfortable with a fully guided safari tour.",
                            "It's unclear from the conversation if David prefers solo or group travel."
                        ]}
                        correctIndex={0}
                    />
                    <MCQuestion
                        question="David wants an adventure, but would he prefer a jam-packed itinerary or some downtime to relax and soak in the experience?"
                        answers={[
                            "David thrives on a busy schedule with activities planned for most of the day.",
                            "A balance of planned safari excursions and free time for wildlife viewing on his own would be perfect.",
                            "David prioritizes relaxation and would prefer minimal structured activities.",
                            "The conversation doesn't provide enough information about David's preferred pace."
                        ]}
                        correctIndex={1}
                    />
                    <MCQuestion
                        question="What is David's approximate budget for this two-week trip?"
                        answers={[
                            "Below $5,000",
                            "$5,000 - $7,000",
                            "$7,000 - $10,000",
                            "Above $10,000"
                        ]}
                        correctIndex={2}
                    />
                    <MCQuestion
                        question="What specific animals is David particularly interested in seeing?"
                        answers={[
                            "Marine life like whales and dolphins",
                            "Lions, elephants, and gorillas",
                            "Exotic birds and rain forest creatures",
                            "Cultural performances involving animals"
                        ]}
                        correctIndex={1}
                    />
                    <img src={savannah} alt="Savannah" className="w-[350px] mx-auto"/>
                    <h2 className="text-white font-semibold text-3xl">Task 2: Be the Prompt Master!</h2>
                    <p className="paragraph-content">Now you've identified your client's travel desires, it's time to translate them into an LLM superpower! This step involves crafting the perfect prompt, a magic spell that unlocks a world of personalized travel options.</p>
                    <p className="paragraph-content">The provided prompt acts as a template, with key details missing. Here's the exciting part –  you'll fill in the blanks based on the keywords you extracted from the client conversation. Choose the BEST answer to fill in each blank of the provided template.</p>
                    <div className="bg-gray-900 p-2 rounded-md">
                        <p className="paragraph-content"><span className="font-bold">Prompt:</span> Suggest unique travel destinations suitable for <span className="font-bold">[Travel-Style-1]</span>, with opportunities for <span className="font-bold">[Priority-1]</span>.  While prioritizing <span className="font-bold">[Priority-2]</span>, consider incorporating options with <span className="font-bold">[Travel-Style-2]</span> that fit within the client's budget of <span className="font-bold">[Budget]</span>.  If relevant, explore destinations with cultural experiences that align with David's interest in <span className="font-bold">[Priority-3]</span>.</p>
                    </div>
                    <MCQuestion
                        question="Travel-Style-1"
                        answers={[
                            "Active travel with exploration and some luxury elements",
                            "Relaxing beach vacation with minimal activity",
                            "Fast-paced sightseeing tour with minimal downtime",
                            "Budget-friendly backpacking adventure with basic accommodations"
                        ]}
                        correctIndex={0}
                    />
                    <MCQuestion
                        question="Priority-1"
                        answers={[
                            "Relaxation and beach lounging",
                            "Cultural immersion and historical exploration",
                            "Wildlife viewing and safaris",
                            "Shopping and experiencing nightlife"
                        ]}
                        correctIndex={2}
                    />
                    <MCQuestion
                        question="Priority-2"
                        answers={[
                            "Photographing interests",
                            "Exploring new cultures",
                            "Luxurious experiences",
                            "Relaxation"
                        ]}
                        correctIndex={1}
                    />
                    <MCQuestion
                        question="Travel-Style-2"
                        answers={[
                            "A complete independent itinerary",
                            "A mix of independent and guided activities",
                            "A fully guided safari tour.",
                        ]}
                        correctIndex={1}
                    />
                    <MCQuestion
                        question="Budget"
                        answers={[
                            "Below $5,000",
                            "$5,000 - $7,000",
                            "Under $10,000",
                            "Above $10,000"
                        ]}
                        correctIndex={2}
                    />
                    <MCQuestion
                        question="Priority-3"
                        answers={[
                            "Marine life like whales and dolphins",
                            "Lions, elephants, and gorillas",
                            "Exotic birds and rain forest creatures",
                            "Cultural performances involving animals"
                        ]}
                        correctIndex={1}
                    />
                </div>
            </main>
        </div>
    );
}

export default PEPage;