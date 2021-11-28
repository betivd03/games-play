import { Link } from "react-router-dom";

import React from "react";

// const ratingCalculator = React.lazy(() => import('../../utils/ratingCalculator.js'));

const Card = ({
    game,
}) => {
    // const onDetailsClick = (e) => {
    //     e.preventDefault();
    //     navigationChangeHandler(`/details/${game._id}`);
    // };

    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={game.imageUrl} alt="img" />
                <h6>{game.category}</h6>
                <h2>{game.title}</h2>
                {/* <p>Rating: {ratingCalculator()}</p> */}
                <Link to={`/games/${game._id}`} className="details-button">Details</Link>
            </div>
        </div>
    );
};

export default Card;