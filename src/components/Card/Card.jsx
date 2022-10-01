import "./Card.css";

function Card({ cover, title }) {
    return (
        <div className="accomodation-card">
            <img src={cover} alt="freelance" />
            <div id="card-bg"></div>
            <h2>{title}</h2>
        </div>
    );
}

export default Card;
