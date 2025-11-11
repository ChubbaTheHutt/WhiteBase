import React, {useState} from 'react';

import { useSearchParams } from 'react-router-dom';

const Filters = () => {


    const [searchParams, setSearchParams] = useSearchParams();

    const [filters, setFilters] = useState({
        name: searchParams.get('name'),
        type: searchParams.get('type'),
        color: searchParams.get('color'),
        order: searchParams.get('order')
    });

    const filterSubmitHandler = e => {
        setSearchParams(filters);
    }

    const filterChangeHandler = e => {
        const {name, value} = e.target;
         
        setFilters({
            ...filters,
            [name]: value
        })
    }


    return(
        <form className="card-search-filters" onSubmit={filterSubmitHandler}>
            <select name="type" value={filters.type} onChange={filterChangeHandler}>
                <option>Pilot</option>
                <option>Suit</option>
                <option>Base</option>
            </select>
            <select name="color">
                <option>red</option>
                <option>blue</option>
            </select>
            <select name="order">
                <option>default</option>
            </select>
            <button type="submit">Apply Filters</button>
        </form>
    )
}

export default Filters;