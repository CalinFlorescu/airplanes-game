import React from 'react'

import './Score.css'

export default function Score({ score }) {
    return (
        <h2 className='score-container'>
            Your current score is {score}
        </h2>
    )
}
