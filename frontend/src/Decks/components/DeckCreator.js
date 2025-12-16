import React, { useState } from 'react';

import './DeckCreator.css';

const DeckCreator = ({ onClose, onSubmit }) => {
    const [deckConfig, setDeckConfig] = useState({
        title: '',
        colors: []
    });

    const colorOptions = [
        { value: "W", label: "White" },
        { value: "B", label: "Blue" },
        { value: "P", label: "Purple" },
        { value: "G", label: "Green" },
        { value: "R", label: "Red" }
    ]

    const configChangeHandler = e => {
        const name = e.target.name

        setDeckConfig({
            ...deckConfig,
            [name]: e.target.type === 'select-multiple' ? Array.from(e.target.selectedOptions, option => option.value) : e.target.value
        })

        console.log('Deck Config:', deckConfig);
    }

    const onSubmitIntermediate = e => {
        e.preventDefault();
        onSubmit(deckConfig);
    }

    return (
        <div className='deck-creator-backdrop'>
            <div className='deck-creator-popup'>
                <h2>Create a New Deck</h2>
                <form onSubmit={onSubmitIntermediate} onChange={configChangeHandler}>
                    <input
                        placeholder='Deck Title'
                        value={deckConfig.title}
                        name="title"
                    />
                    <select multiple
                        name='colors'
                        value={deckConfig.colors}>
                        {colorOptions.map(color => (
                            <option key={color.value} value={color.value}>{color.label}</option>
                        ))}
                    </select>
                    <button type='submit'>Create Deck</button>
                    <button type='button' onClick={onClose}>Cancel</button>
                </form>
            </div>


        </div>
    )
}

export default DeckCreator;