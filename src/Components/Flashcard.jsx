import { useState, useEffect } from 'react';
import './flashcard.css'
import Loading from './Loading';


export default function Flashcard({keyVal, wordObj, accessNextCard, accessPrevCard, totalCards, goBack}){
    let meaning = wordObj.meanings?.[0]?.["glosses"]?.[0] || "N/A";
    let pronounced = wordObj["variants"]?.[0]?.["pronounced"] || "N/A";
    let written = wordObj["variants"]?.[0]?.["written"] || "N/A";

    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {
    setShowAnswer(false);
}, [keyVal]);

    if (totalCards){
        return (
            <div className='container'>
                <button onClick={goBack} className='back-btn' >Back</button>
                <div className='flash-card'>
                    <p className='card-number'>{keyVal + 1}/{totalCards}</p>
                    <div className="front">
                        <h2 className="kanji">{written}</h2>
                    </div>
                    <div className="back">{showAnswer ? <><p className="pronounced">{pronounced}</p><p className="meaning">{meaning}</p></> : "" }</div>
                    
                    <div className='btns'>
                        <button onClick={accessPrevCard} disabled={keyVal === 0}>Prev</button>
                        <button onClick={() => setShowAnswer(prev => !prev)}>{showAnswer?"Hide Answer":"Show Answer"}</button>
                        <button onClick={accessNextCard} disabled={keyVal === totalCards - 1}>Next</button>
                    </div>
        
                </div>
            </div>
        )
    } else {
        return <Loading />;
    }
}