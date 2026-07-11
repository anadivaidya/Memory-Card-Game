import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import Loading from "./components/Loading";
import "./app.css";
import { useState, useEffect } from "react";

function App() {
  //states
  const [data, setData] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [loading, setLoading] = useState(true);

  const [clickedIds, setClickedIds] = useState([])

  //effects
  useEffect(() => {
    const fetchData = async () => {
      try {
        const arrayIDs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
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

  //logic
  const shuffleCards = () => {
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    setData(shuffled);
  }

  const handleCardClick = (id) => {
    if(clickedIds.includes(id)){
      if(score >= highScore){
        setHighScore(score)
      }
      setScore(0);
      setClickedIds([])
      alert("Game Over!");
    } else{
      const nextScore = score + 1;
      setScore(nextScore);
      setClickedIds([...clickedIds, id]);

      if(nextScore === data.length){
        setHighScore(nextScore);
        setScore(0);
        setClickedIds([]);
        alert("Perfect Game!")
      }
    }
    shuffleCards()
  }

  return (
    <>
      <Header score={score} highScore={highScore} />
      {loading ? <Loading /> : <Gameboard list={data} onCardClick={handleCardClick}/>}
    </>
  );
}

export default App;
