import React, { useState, useEffect } from 'react'

import './GameTable.css'

import GameTile from '../GameTile'

const date = new Date()

export default function GameTable({ 
    setScore, 
    setIsGameFinished, 
    setStartTime,
    setDifficulty,
    score,
    difficulty 
}) {
    const [tiles, setTiles] = useState([])
    const [size, setSize] = useState(0)
    const [winningTile, setWinningTile] = useState({})
    // Used to not increase score for a visited tile
    const [visitedTiles, setVisitedTiles] = useState({})

    useEffect(() => {
        const initialArray = []
    
        for (let i = 0; i < size; i++)
          for (let j = 0; j < size; j++) 
            initialArray.push({
              xCoordinate: i,
              yCoordinate: j
            })
        
        setTiles(initialArray)
    
        const x = Math.floor(Math.random() * size + 0);
        const y = Math.floor(Math.random() * size + 0);
    
        setWinningTile({
          x, y
        })
    
        setStartTime(date.getTime())
    }, [difficulty])

    const handleTileClick = (e) => {
        e.preventDefault()
        const coordinates = e.target.id
    
        const x = parseInt(coordinates.substr(0, 1))
        const y = parseInt(coordinates.substr(2, 1))
    
        if (visitedTiles[`${x}_${y}`] === undefined) {
          if (winningTile.x === x && winningTile.y === y) 
            setIsGameFinished(true)
    
          setScore(score + 1)
          setVisitedTiles({...visitedTiles, [`${x}_${y}`]: 1})
        }
      }

    const handleDifficultySelect = (e) => {
        const difficulty = e.target.id

        if(difficulty === 'button-easy') {
            setSize(5)
            setDifficulty('easy')
        } else if (difficulty === 'button-medium') {
            setSize(7)
            setDifficulty('medium')
        } else if (difficulty === 'button-hard')  {
            setSize(9)
            setDifficulty('hard')
        }
    }

    if (difficulty === '' && size === 0)
        return (
            <div className='game-table-difficulty'>
                <h2>Choose your difficulty</h2>
                <button id='button-easy' onClick={(e) => handleDifficultySelect(e)}>Easy</button>
                <button id='button-medium' onClick={(e) => handleDifficultySelect(e)}>Medium</button>
                <button id='button-hard' onClick={(e) => handleDifficultySelect(e)}>Hard</button>
            </div>
        )
    else
        return (
            <div id={difficulty} className='game-table-container'>
                {tiles.map(tile => (
                    <GameTile 
                        x={tile.xCoordinate}
                        y={tile.yCoordinate}
                        key={`${tile.xCoordinate}-${tile.yCoordinate}`}
                        winningTile={winningTile}
                        handleTileClick={handleTileClick}
                    />
                ))}
            </div>
        )
}
