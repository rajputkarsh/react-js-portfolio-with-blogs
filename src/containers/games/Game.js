import React from 'react';
import Header from '../../components/header/Header';
import NotFoundContent from "../../pages/notFound/NotFoundContent";
import { useParams } from 'react-router-dom';

import './Game.css';
import TikTakToe from '../../components/games/tik-tak-toe/TikTakToe';

function Game(props) {

    const { gameSlug } = useParams();

    const getGameComponent = (gameUrl) => {
        switch(gameUrl){
            case 'tik-tak-toe' : return <TikTakToe theme={props.theme} setTheme={props.setTheme} />;

            default: return <NotFoundContent theme={props.theme} setTheme={props.setTheme} />
        }
    }

    return (
        <div className='game-main'>
            <Header theme={props.theme} setTheme={props.setTheme} />

            <div className="game">
                {
                    getGameComponent(gameSlug)
                }
            </div>
        </div>
    )
}

export default Game;
