import React, {Component} from 'react';
import GameInfo from '../components/GameInfo.js';
import Board from '../components/Board.js'

class GameContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      squareStates : [' ','X',' ',' ',' ','O',' ',' ',' '],
      nextPlayer : 1
    };
  };

  render() {
    return (
      <div className="gameContainer">
        <GameInfo message="TODO: Game status" />
        <Board squareStates={this.state.squareStates} />
      </div>
    )
  }

};

export default GameContainer;
