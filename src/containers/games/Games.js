import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import GameCard from '../../components/gameCard/GameCard';

import { games } from '../../portfolio';

import './Games.css';

function Games(props) {
  return (
    <div className='games-main'>
      <Header theme={props.theme} setTheme={props.setTheme} />

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
  )
}

export default Games;
