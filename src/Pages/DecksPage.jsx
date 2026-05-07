import Folder from "../Components/Folder";
import Loading from "../Components/Loading";
import Header from "../Components/Header";
import { useEffect, useState } from "react";
import { fetchKanjiLetters, fetchWords } from "../services/api";

export default function DecksPage({ setView, setSelectedChar }) {
  const [decks, setDecks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchKanjiLetters().then((data) => {
      setDecks(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Header />
      <div id="decks">
        {decks.map((deck, idx) => (
          <div className="deck" key={idx}>
            <Folder
              name={deck}
              setView={setView}
              setSelectedChar={setSelectedChar}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
