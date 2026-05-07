import { useEffect } from "react";
import Flashcard from "../Components/Flashcard";
import { useState } from "react";
import { fetchWords } from "../services/api";
import Loading from "../Components/Loading";

export default function FlashcardPage({ setView, selectedChar }) {
  const [words, setWords] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);
  const [loading, setLoading] = useState(true);

  const accessNextCard = function () {
    if (currentCard < words.length - 1) {
      setCurrentCard(currentCard + 1);
    }
  };

  const accessPrevCard = function () {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchWords(selectedChar).then((data) => {
      setWords(data);
      setLoading(false);
      setCurrentCard(0);
    });
  }, [selectedChar]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Flashcard
      key={currentCard}
      keyVal={currentCard}
      wordObj={words[currentCard]}
      accessNextCard={accessNextCard}
      accessPrevCard={accessPrevCard}
      totalCards={words.length}
      setView={setView}
    />
  );
}
