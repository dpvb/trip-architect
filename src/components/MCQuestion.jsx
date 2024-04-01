import { useState } from "react";

/* eslint-disable react/prop-types */
function MCQuestion({ question, answers, correctIndex }) {
    const [clicked, setClicked] = useState(false);

    const handleClick = (index) => {
        if (clicked) return;
        setClicked(true);
    }

    const notClickedStyles = "border-slate-400 border-[1px] w-full text-left p-2 rounded-md text-slate-400 hover:text-white hover:border-white";
    const clickedStylesCorrect = "border-green-400 border-[1px] w-full text-left p-2 rounded-md text-green-400";
    const clickedStylesIncorrect = "border-red-400 border-[1px] w-full text-left p-2 rounded-md text-red-400";

    return (
        <div>
            <h2 className="text-xl text-slate-200">{question}</h2>
            <div className="flex flex-col gap-3 mt-2">
                {answers.map((answer, index) => (
                    <div key={index}>
                        <button className={clicked ? (index === correctIndex ? clickedStylesCorrect : clickedStylesIncorrect) : notClickedStyles} onClick={() => handleClick(index)}>{answer}</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MCQuestion;