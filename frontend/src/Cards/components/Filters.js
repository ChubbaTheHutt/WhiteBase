import React from 'react';

import './Filters.css';

const Filters = props => {


    const typeOptions = [{
        value: "Pilot",
        label: "Pilot"
    }, {
        value: "Unit",
        label: "Unit"
    }, {
        value: "Base",
        label: "Base"
    }, {
        value: "Resource",
        label: "Resource"
    }, {
        value: "Command",
        label: "Command"
    }]

    const colorOptions = [{
        value: "R",
        label: "Red"
    }, {
        value: "B",
        label: "Blue"
    }, {
        value: "W",
        label: "White"
    }, {
        value: "G",
        label: "Green"
    }, {
        value: "P",
        label: "Purple"
    }
    ]

    const rarityOptions = [
        {value: "C",label: "Common"},
        {value: "C+", label: "Common+"},
        {value: "R", label: "Rare"},
        {value: "R+", label: "Rare+"},
        {value: "U", label: "Uncommon"},
        {value: "U+", label: "Uncommon+"},
        {value: "LR", label: "Legendary Rare"},
        {value: "LR+", label: "Legendary Rare+"},
        {value: "UR", label: "Ultra Rare"}
    ]

    return (
        <form className="card-search-filters" onSubmit={props.onSubmit} onChange={props.onChange}>

            <div className='filters-select-group'>
                <label htmlFor="type">Type:</label>
                <select name="type" value={props.filters.type}>
                    <option value=''>Any</option>
                    {typeOptions.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.value}
                        </option>
                    ))}
                </select>
            </div>

            <div className='filters-select-group'>
                <label htmlFor="color">Color:</label>
                <select name="color" value={props.filters.color}>
                    <option value=''>Any</option>
                    {colorOptions.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>

            <div className='filters-select-group'>
                <label htmlFor="rarity">Rarity:</label>
                <select name="rarity" value={props.filters.rarity}>
                    <option value=''>Any</option>
                    {rarityOptions.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>

            <div className='filters-select-group'>
                <label htmlFor="order">Order By:</label>
                <select name="order" value={props.filters.order}>
                    <option value=''>Default</option>
                </select>
            </div>

            <button type="submit">Apply Filters</button>
        </form>
    )
}

export default Filters;