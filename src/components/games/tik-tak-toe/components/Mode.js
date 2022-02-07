import React from 'react'
import Title from '../elements/Title'
import styled from 'styled-components'
import GreenButton from '../elements/GreenButton'

import './Mode.css'

const Credit=styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
    color: white;
    font-family: 'Itim', cursive;
    font-size:17px;
`
function Mode({ theme, setTheme, clickHumanBtn, clickAIBtn}) {
    
    return (
        <div className="select-mode">
            <h1>Play Tik Tak Toe</h1>
            { console.log(theme) }
            <div className={`bordered-select ${theme.name}`}>
                <h2>Select mode</h2>
                <GreenButton onClick={clickHumanBtn}>Two Player</GreenButton>
                <GreenButton onClick={clickAIBtn}>One Player</GreenButton>                
            </div>

        </div>
    )
}

export default Mode
