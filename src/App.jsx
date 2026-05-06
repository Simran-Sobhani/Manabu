
import { useEffect, useState } from "react";
import Folder  from "./Components/Folder";
import Flashcard from "./Components/Flashcard";
import { fetchKanjiLetters, fetchWords } from "./services/api";

function App() {
  const [decks, setDecks] = useState([]);
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCard, setCurrentCard] = useState(0);
  const [view, setView] = useState("deck");

  useEffect(() => {
    fetchKanjiLetters()
    .then(data => {
      setDecks(data);
      setIsLoading(false);
    })
  }, []);

  const accessNextCard = function (){
    if (currentCard < words.length - 1){
      setCurrentCard(currentCard + 1);
    }
  }

  const accessPrevCard = function (){
    if (currentCard > 0){
      setCurrentCard(currentCard - 1);
    }
  }

  const getWords = async function (char){
    setIsLoading(true);
    setView("cards");
    setCurrentCard(0);

    try {
      let data = await fetchWords(char);
      setWords(data);
    } catch (err){
      console.log(err)
    }

    setIsLoading(false);
  }

  if (isLoading){
    return "Loading..."
  }

  if (view == "deck"){
    return (
      <div id="decks">
        {decks.map((deck, idx) => <div className="deck"><Folder key={idx} name={deck} setView={setView} getWords={getWords} /></div> )}
      </div>
      
    )
  }

  return (
    <>

      {<Flashcard key={currentCard} keyVal={currentCard} wordObj={words[currentCard]} accessNextCard={accessNextCard} accessPrevCard={accessPrevCard} totalCards={words.length} setView={setView} />}
      
    </>
  )
}

export default App
