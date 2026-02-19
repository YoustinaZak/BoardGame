import "./App.css";
import { useState } from "react";
function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const squares = [
    { id: 1, top: 0, left: 0 },
    { id: 2, top: 0, left: 100 },
    { id: 3, top: 0, left: 200 },
    { id: 4, top: 100, left: 200 },
    { id: 5, top: 100, left: 300 },
    { id: 6, top: 100, left: 400 },
    { id: 7, top: 200, left: 400 },
    { id: 8, top: 300, left: 400 },
    { id: 9, top: 400, left: 400 },
    { id: 10, top: 400, left: 500 },
    { id: 11, top: 400, left: 600 },
    { id: 12, top: 400, left: 700 },
    { id: 13, top: 500, left: 800 },
    { id: 14, top: 500, left: 900 },
    { id: 15, top: 400, left: 900 },
    { id: 16, top: 300, left: 900 },
    { id: 17, top: 200, left: 900 },
    { id: 18, top: 200, left: 800 },
    { id: 19, top: 200, left: 700 },
    { id: 20, top: 100, left: 700 },
    { id: 21, top: 100, left: 800 },
  ];
  const leaderboard = [
    { name: "Laila", points: 12 },
    { name: "Karin", points: 11 },
    { name: "Yara", points: 3 },
    { name: "Amira", points: 10 },
    { name: "Maya", points: 10 },
    { name: "Sara", points: 8 },
    { name: "Nora", points: 5 },
  ];
  const sortedLeaderboard = [...leaderboard].sort(
    (a, b) => b.points - a.points
  );

  return (
    <div className="container">
      <div className="game-area">
        {/* Leaderboard */}
        <div className="leaderboard">
          <h2>Leaderboard 🏆</h2>
          <ul>
            {sortedLeaderboard.map((player, idx) => (
            <li
              key={idx}
              onClick={() => setSelectedPlayer(player)}
              className="player-item"
            >
              <span>
                {idx === 0 && "👑 "}
                {idx === 1 && "💖 "}
                {idx === 2 && "✨ "}
                {player.name}
              </span>
              <span>{player.points}</span>
            </li>
          ))}
          </ul>
        </div>
        <div className="board-section">
        <h1>Treasure Map</h1>
        {/*<div class="map">🗺️</div>*/}
      <div className="board">
        {squares.map((sq) => (
          <div
            key={sq.id}
            className="square"
            style={{ top: `${sq.top}px`, left: `${sq.left}px` }}
          >
            {sq.id === 21 ? "💎" : sq.id}
            {selectedPlayer && selectedPlayer.points === sq.id && (
            <div className="player-circle"></div>
          )}
            </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;
