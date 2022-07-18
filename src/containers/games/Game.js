import React from 'react';
import Header from '../../components/header/Header';
import NotFoundContent from "../../pages/notFound/NotFoundContent";
import { useParams } from 'react-router-dom';
import TikTakToe from '../../components/games/tik-tak-toe/TikTakToe';
import { documentTitles } from '../../portfolio';
import './Game.modules.css';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "../../backend"; 
import Game2048 from '../../components/games/2048/Game2048';

function Game(props) {

    const { gameSlug } = useParams();

    document.title = documentTitles.games + " | " + gameSlug;

    const app = initializeApp(firebaseConfig);
    getAnalytics(app);

    const getGameComponent = (gameUrl) => {
        switch (gameUrl) {
            case 'tik-tak-toe'  : return <TikTakToe theme={props.theme} setTheme={props.setTheme} />;
            case '2048'         : return <Game2048 theme={props.theme} setTheme={props.setTheme} />;

            default: return <NotFoundContent theme={props.theme} setTheme={props.setTheme} />
        }
    }

    return (
        <>
            <Header theme={props.theme} setTheme={props.setTheme} />
            <div className='game-main'>

                <div className="game">
                    {
                        getGameComponent(gameSlug)
                    }
                </div>
            </div>
        </>
    )
}

export default Game;
