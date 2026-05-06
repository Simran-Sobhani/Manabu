import { useState } from 'react';
import './flashcard.css'


export default function Flashcard({keyVal, wordObj, accessNextCard, accessPrevCard, totalCards}){
    let meaning = wordObj.meanings?.[0]?.["glosses"]?.[0] || "N/A";
    let pronounced = wordObj["variants"]?.[0]?.["pronounced"] || "N/A";
    let written = wordObj["variants"]?.[0]?.["written"] || "N/A";

    const [showAnswer, setShowAnswer] = useState(false);

    if (totalCards){
        return (
            
            <div key={keyVal} className='flash-card'>
                <p>{keyVal + 1}/{totalCards}</p>
                <div className="front">
                    <h2 className="kanji">{written}</h2>
                </div>
                {showAnswer ? <div className="back"><p className="pronounced">{pronounced}</p><p className="meaning">{meaning}</p></div> : "" }
                
                <div>
                    <button onClick={accessPrevCard} disabled={keyVal == 0}>Prev</button>
                    <button onClick={() => setShowAnswer(!showAnswer)}>{showAnswer?"Hide Answer":"Show Answer"}</button>
                    <button onClick={accessNextCard} disabled={keyVal == totalCards - 1}>Next</button>
                </div>
    
            </div>
        )
    } else {
        return <p>Loading..</p>
    }
}