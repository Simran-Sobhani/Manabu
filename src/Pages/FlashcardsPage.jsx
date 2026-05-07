import { useEffect } from "react";
import Flashcard from "../Components/Flashcard";
import { useState } from "react";
import { fetchWords } from "../services/api";
import Loading from "../Components/Loading";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function FlashcardPage() {
  const [words, setWords] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);
  const [loading, setLoading] = useState(true);
  const { char } = useParams();
  const navigate = useNavigate();

  const accessNextCard = function () {
    setCurrentCard((prev) => (prev < words.length - 1 ? prev + 1 : prev));
  };

  const accessPrevCard = function () {
    setCurrentCard((prev) => (prev > 0 ? prev - 1 : prev));
  };

  useEffect(() => {
    setLoading(true);
    fetchWords(char).then((data) => {
      setWords(data);
      setLoading(false);
      setCurrentCard(0);
    });
  }, [char]);

  const goBack = () => {
    navigate("/");
  };

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
      goBack={goBack}
    />
  );
}
