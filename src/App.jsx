import { useEffect, useState } from "react";
import DecksPage from "./Pages/DecksPage";
import FlashcardPage from "./Pages/FlashcardsPage";
import LettersPage from "./Pages/LettersPage";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<DecksPage  />}
        />
        <Route
          path="/deck/:char"
          element={<FlashcardPage />}
        />
        <Route
          path="/letters"
          element={<LettersPage />}
        />
      </Routes>
    </>
  );
}

export default App;

