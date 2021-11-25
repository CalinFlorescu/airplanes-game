import React, { useState } from 'react'

import './App.css';

import GameEndModal from './components/GameEndModal'
import GameTable from './components/GameTable'
import Score from './components/Score'
import ScoreHistory from './components/ScoreHistory'

import { addEntryToLocalStorage } from './utils/localStorageMethods'

function App() {
  const [isGameFinished, setIsGameFinished] = useState(false)
  const [score, setScore] = useState(0)
  const [startTime, setStartTime] = useState(0)
  const [difficulty, setDifficulty] = useState('')

  const handlePlayAgain = () => {
    setIsGameFinished(false)
    setScore(0)

    addEntryToLocalStorage({score, startTime, difficulty})

    window.location.reload()
  }

  return (
    <React.Fragment>
      <div className='app-container'>
        <div className='app-score'>
          <Score score={score} />
        </div>
        <div className='app-game-board'>
            <GameTable 
              setScore={setScore} 
              setIsGameFinished={setIsGameFinished} 
              setStartTime={setStartTime}
              setDifficulty={setDifficulty}
              difficulty={difficulty}
              score={score} 
            />
        </div>
        <div className='app-score-history'>
          <ScoreHistory />
        </div>
      </div>
      {isGameFinished ? <GameEndModal handlePlayAgain={handlePlayAgain} score={score} /> : null}
    </React.Fragment>
  );
}

export default App;
