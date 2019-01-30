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
    this.handleSquareClick = this.handleSquareClick.bind(this);
  };

  handleSquareClick(squareIndex) {
    console.log(`Square ${squareIndex} clicked`);
  };

  render() {
    return (
      <div className="gameContainer">
        <GameInfo message="TODO: Game status" />
        <Board onSquareClick={this.handleSquareClick} squareStates={this.state.squareStates} />
      </div>
    )
  }


};

export default GameContainer;
