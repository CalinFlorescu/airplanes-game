import React from 'react'

import './ScoreHistory.css'

import { getEntriesFromLocalStorage } from '../../utils/localStorageMethods'

export default function ScoreHistory() {
    const userEntries = getEntriesFromLocalStorage()

    return (
        <div className="score-history-container">
            {userEntries.length !== 0 ? userEntries.map(entry => (
                <div key={`${entry.score}-${entry.time}`}>
                    <h3>{entry.score} | {entry.difficulty} | {entry.time} seconds | {entry.date}</h3>
                </div>
            )) : (<h2>No entries yet</h2>)}
        </div>
    )
}
