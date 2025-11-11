import React from "react";

import CardItem from "./CardItem";

const CardsList = ({cards}) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Color</th>
                    <th>Type</th>
                </tr>
            </thead>
            {cards.map(card => (
                <CardItem card={card}/>
            ))}
        </table>
    )
}

export default CardsList;