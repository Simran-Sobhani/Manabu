import { useState } from "react";
import "./folder.css";

export default function Folder({ name, setView, setSelectedChar }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ cursor: "pointer" }}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          setView("cards");
          setSelectedChar(name);
        }}
        id={name}
        className="folder"
      >
        <div className="folder-icon">
          {isHovered ? (
            <ion-icon name="folder-open"></ion-icon>
          ) : (
            <ion-icon name="folder"></ion-icon>
          )}
        </div>
        <p className="folder-name">Words for {name}</p>
      </div>
    </div>
  );
}
