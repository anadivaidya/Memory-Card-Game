import "../styles/Header.css";
export default function Header({score, highScore}) {
  return (
    <>
      <div className="header">
        <div className="header-title">
          <h1>The Memory Card Game</h1>
          <label>Remeber your Pokémon</label>
        </div>
        <div className="header-details">
          <h2>Score: {score}</h2>
          <h2>High Score: {highScore}</h2>
        </div>
      </div>
    </>
  );
}
