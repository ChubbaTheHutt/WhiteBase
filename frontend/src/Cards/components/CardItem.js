import React from "react";

const CardItem = ({card}) => {

    return(
        <tr>
            <td>{card.name}</td>
            <td>{card.colors}</td>
            <td>{card.type}</td>
        </tr>
    )
}

export default CardItem;