import React, {Component} from 'react';
import GameInfo from '../components/GameInfo.js';
import Board from '../components/Board.js'

class GameContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      squareStates : [' ','X',' ',' ',' ','O',' ',' ',' '],
      currentPlayer : 1
    };
    this.handleSquareClick = this.handleSquareClick.bind(this);
  };

  handleSquareClick(squareIndex) {
    console.log(`Square ${squareIndex} clicked`);
    //const selectedSquare = this.state.squareStates[squareIndex];
    let gameSymbol = "";
    if (this.state.currentPlayer === 1) {
      gameSymbol = "O";
    } else {
      gameSymbol = "X";
    }
    const newSquareStates = this.state.squareStates;
    newSquareStates[squareIndex] = gameSymbol;
    this.setState({
      squareStates: newSquareStates,
      currentPlayer: 3-this.state.currentPlayer
    });
  };

  render() {
    return (
      <div className="gameContainer">
        <GameInfo message={this.state.currentPlayer} />
        <Board onSquareClick={this.handleSquareClick} squareStates={this.state.squareStates} />
      </div>
    )
  }


};

export default GameContainer;
