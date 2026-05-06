
import { useEffect, useState } from "react";
import Folder  from "./Components/Folder";
import Flashcard from "./Components/Flashcard";
import { fetchWords } from "./services/api";

function App() {

  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    fetchWords()
    .then(data => {
      setWords(data);
      setIsLoading(false)
    });
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

  return (
    <>
      <Folder name={"Default Deck"} />
      {isLoading ? "Loading..." : <Flashcard key={currentCard} keyVal={currentCard} wordObj={words[currentCard]} accessNextCard={accessNextCard} accessPrevCard={accessPrevCard} totalCards={words.length} />}
      
    </>
  )
}

export default App
