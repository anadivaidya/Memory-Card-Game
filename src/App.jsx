import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import "./app.css";
import { useState, useEffect } from "react";

function App() {
  //states
  const [data, setData] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [loading, setLoading] = useState(true);

  //effects
  useEffect(() => {
    const fetchData = async () => {
      try {
        const arrayIDs = [1, 2, 3, 4];
        const promises = arrayIDs.map(async (id) => {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${id}`,
          );
          if (!response.ok) {
            console.error("Cannot connect");
            return;
          }
          const result = await response.json();
          return {
            id: result.id,
            name: result.name.charAt(0).toUpperCase() + result.name.slice(1),
            image: result.sprites.other["official-artwork"].front_default,
          };
        });

        const completedList = await Promise.all(promises);

        setData(completedList);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  //handlers

  return (
    <>
      <Header score={score} highScore={highScore} />
      {loading ? <div>Game Loading...</div> : <Gameboard list={data} />}
    </>
  );
}

export default App;
