import React from 'react';
import Header from '../../components/header/Header';
import GameCard from '../../components/gameCard/GameCard';
import './Games.modules.css';
import { games, documentTitles } from '../../portfolio';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "../../backend"; 

function Games(props) {

  document.title = documentTitles.games;

  const app = initializeApp(firebaseConfig);
  getAnalytics(app);

  return (
    <>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className='games-main'>
        <div>
          <div className="repo-cards-div-main">
            {
              Object.keys(games.data).map((key) => {
                return <GameCard key={key} id={key} game={games.data[key]} url={games.data[key].url} theme={props.theme} />;
              })
            }
          </div>         
        </div>
        </div>    
    </>

  )
}

export default Games;
