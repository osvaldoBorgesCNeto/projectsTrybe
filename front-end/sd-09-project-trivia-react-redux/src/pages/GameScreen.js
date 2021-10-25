import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Game from '../components/Game';
import Feedback from '../components/Feedback';
import Header from '../components/Header';

class GameScreen extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/game" component={ Game } />
          <Route path="/feedback" component={ Feedback } />
        </Switch>
      </div>
    );
  }
}

export default GameScreen;
