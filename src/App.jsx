import { useEffect, useState } from "react";
import DecksPage from "./Pages/DecksPage";
import FlashcardPage from "./Pages/FlashcardsPage";

function App() {
  const [view, setView] = useState("deck");
  const [selectedChar, setSelectedChar] = useState("");

  return (
    <>
      {view === "deck" ? (
        <DecksPage setView={setView} setSelectedChar={setSelectedChar} />
      ) : (
        <FlashcardPage setView={setView} selectedChar={selectedChar} />
      )}
    </>
  );
}

export default App;
