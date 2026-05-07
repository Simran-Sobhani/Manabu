import Folder from "../Components/Folder";
import Loading from "../Components/Loading";
import Header from "../Components/Header";
import { useEffect, useState } from "react";
import { fetchKanjiLetters } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function DecksPage() {
  const [decks, setDecks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

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
      <div id="decks">
        {decks.map((deck, idx) => (
          <div className="deck" key={idx} onClick={() => {
            navigate("/deck/" + deck);
          }}>
            <Folder
              name={deck}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
