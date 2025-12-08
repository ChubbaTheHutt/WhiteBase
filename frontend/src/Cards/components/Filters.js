import React from 'react';

const Filters = props => {
    return(
        <form className="card-search-filters" onSubmit={props.onSubmit} onChange={props.onChange}>
            <select name="type" defaultValue={props.filters.type}>
                <option>Pilot</option>
                <option>Suit</option>
                <option>Base</option>
            </select>
            <select name="color" defaultValue={props.filters.color}>
                <option>red</option>
                <option>blue</option>
            </select>
            <select name="order" defaultValue={props.filters.order}>
                <option>default</option>
            </select>
            <button type="submit">Apply Filters</button>
        </form>
    )
}

export default Filters;