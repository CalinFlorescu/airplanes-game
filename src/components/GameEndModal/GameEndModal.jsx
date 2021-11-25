import React from 'react'

import './GameEndModal.css'

export default function GameEndModal({ score, handlePlayAgain }) {
    return (
        <div className='end-modal-container'>
            <h2>Congrats, your final score is: {score}</h2>
            <button 
                onClick={handlePlayAgain}
            >
                Play Again!
            </button>
        </div>
    )
}
