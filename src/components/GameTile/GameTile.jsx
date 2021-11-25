import React, { useState } from 'react'

import './GameTile.css'

export default function GameTile({ x, y, winningTile, handleTileClick }) {
    const [cssClass, setCssClass] = useState('game-tile-back')

    const onClick = (e) => {
        handleTileClick(e)

        if (x === winningTile.x && y === winningTile.y) {
            setCssClass('game-tile-win')
        } else {
            setCssClass('game-tile-lose')
        }
    }

    return (
        <div 
            onClick={(e) => onClick(e)} 
            className={cssClass} 
            id={`${x}-${y}`}
        />
    )
}
