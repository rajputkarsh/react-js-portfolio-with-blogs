import React from 'react'
import styled from 'styled-components'
import Button from '../elements/Button'

const Score = styled.span`
    @import url('https://fonts.googleapis.com/css2?family=Coda+Caption:wght@800&family=Luckiest+Guy&display=swap');
    color: ${props => props.turn === props.check ? "#39ff14": "whitesmoke"};
    font-size: 50px;
    font-family: 'Coda Caption', sans-serif;
    font-family: 'Luckiest Guy', cursive;
    margin-top: 5px;
`
function ScoreCard({Turn,xScore,oScore}) {
    return (
        <div>
            <Button width={'100px'} height={'100px'}>X</Button>
            {Turn === 'X' && <Score>&#8594;</Score>}
            <Score turn={Turn} check='X'>{xScore}</Score>
            <Button width={'100px'} height={'100px'}>O</Button>
            {Turn === 'O' && <Score>&#8594;</Score>}
            <Score turn={Turn} check='O'>{oScore}</Score>
        </div>
    )
}

export default ScoreCard
