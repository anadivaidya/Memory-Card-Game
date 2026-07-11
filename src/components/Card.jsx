import "../styles/Card.css"
export default function Card({image, details, onClick}) {
    return(
        <>
            <div className="card" onClick={onClick} style={{cursor: 'pointer'}}>
                <div className="card-image">
                    <img src={image} alt="pokemon" />
                </div>
                <div className="card-description">
                    <p>{details}</p>
                </div>
            </div>
        </>
    )
}