import React, {Component} from 'react';
import GameInfo from '../components/GameInfo.js';
import Board from '../components/Board.js'

class GameContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      squareStates : [' ',' ',' ',' ',' ',' ',' ',' ',' '],
      currentPlayer : 1,
      winner : ""
    };
    this.winLines = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];
    this.handleSquareClick = this.handleSquareClick.bind(this);

  };

  detectWinner(){
    let result = "";
    let lineContents = [];
    this.winLines.forEach((lineIndex) => {
      const line = this.state.squareStates[lineIndex[0]] + this.state.squareStates[lineIndex[1]] + this.state.squareStates[lineIndex[2]];
      lineContents.push(line);
    })
    if (lineContents.findIndex((item) => {
      return item === "OOO";
    }) > -1) {
      this.setState({winner : "Player 1 (O) Wins!"})
    } else if (lineContents.findIndex((item) => {
      return item === "XXX";
    }) > -1 ) {
      this.setState({winner : "Player 2 (X) Wins!"})
    }
  }

  handleSquareClick(squareIndex) {
    console.log(`Square ${squareIndex} clicked`);
    const selectedSquare = this.state.squareStates[squareIndex];
    if (selectedSquare !== ' ') {
      return
    }
    let gameSymbol = "";
    if (this.state.currentPlayer === 1) {
      gameSymbol = "O";
    } else {
      gameSymbol = "X";
    }
    const newSquareStates = this.state.squareStates;
    newSquareStates[squareIndex] = gameSymbol;
    this.detectWinner();
    this.setState({
      squareStates: newSquareStates,
      currentPlayer: 3-this.state.currentPlayer
    });
  };


  render() {
    return (
      <div className="gameContainer">
        <GameInfo message={this.state.currentPlayer} winner={this.state.winner}/>
        <Board onSquareClick={this.handleSquareClick} squareStates={this.state.squareStates} />
      </div>
    )
  }


};

export default GameContainer;
