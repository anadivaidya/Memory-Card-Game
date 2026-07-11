import Card from "./Card";
import "../styles/Gameboard.css";

export default function Gameboard({list, onCardClick}) {
  return (
    <>
      <div className="gameboard">
        {list.map((data) => (
          <Card 
          key={data.id} 
          image={data.image} 
          details={data.name}
          onClick={() => onCardClick(data.id)}/>
        ))}
      </div>
    </>
  );
}
