import "../styles/Card.css"
export default function Card({image, details}) {
    return(
        <>
            <div className="card">
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