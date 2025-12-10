import React from 'react';

const Filters = props => {
    return(
        <form className="card-search-filters" onSubmit={props.onSubmit} onChange={props.onChange}>
            <select name="type" value={props.filters.type}>
                <option></option>
                <option>Pilot</option>
                <option>Suit</option>
                <option>Base</option>
            </select>
            <select name="color" value={props.filters.color}>
                <option></option>
                <option>R</option>
                <option>B</option>
                <option>W</option>
                <option>G</option>
            </select>
            <select name="rarity" value={props.filters.rarity}>
                <option></option>
                <option>C</option>
                <option>C+</option>
                <option>R</option>
                <option>UR</option>
            </select>
            <select name="order" value={props.filters.order}>
                <option></option>
            </select>
            <button type="submit">Apply Filters</button>
        </form>
    )
}

export default Filters;