import React from 'react';
import Button from '../elements/Button';
import GreenButton from '../elements/GreenButton'
import Title from '../elements/Title'
import ScoreCard from './ScoreCard'
import ExitButton from '../elements/ExitButton'

function Board({ squares, onClick, Turn, AI, xScore, oScore, Winner, WinningSquares, ShowSquares, playAgain, clickExit}) {
    
    const renderSquare=(i)=>{
        const color = WinningSquares !== null && WinningSquares.indexOf(i) !== -1 ?'#39ff14':null
        return <Button color={color} width={'100px'} height={'100px'} onClick={() => { onClick(i) }}>{!squares[i] ? '.' : squares[i]}</Button>
    }
    
    return (
        <>
            <Title>{Winner === 'd' ? "Draw" : Winner !== null && "Winner: " + Winner}</Title>
            {Winner === null && <ScoreCard Turn={Turn} xScore={xScore} oScore={oScore} />}
            {ShowSquares &&
                <div>
                    <div>
                        {renderSquare(0)}
                        {renderSquare(1)}
                        {renderSquare(2)}
                    </div>

                    <div>
                        {renderSquare(3)}
                        {renderSquare(4)}
                        {renderSquare(5)}
                    </div>

                    <div>
                        {renderSquare(6)}
                        {renderSquare(7)}
                        {renderSquare(8)}
                    </div>
                </div>
            }
            {!ShowSquares && 
                <div>
                    <GreenButton onClick={playAgain}>Play Again</GreenButton>
                    <ExitButton clickExit={clickExit}/>
                </div>
            }
        </>
    )
}

export default Board
