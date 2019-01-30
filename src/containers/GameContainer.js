import React, {Component} from 'react';
import GameInfo from '../components/GameInfo.js';
import Board from '../components/Board.js';
import Reset from '../components/Reset.js';

class GameContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      squareStates : [' ',' ',' ',' ',' ',' ',' ',' ',' '],
      currentPlayer : 1, // 1 (O) or 2 (X)
      winner : "Click on a square", // text about winner
      winnerNumber: 0, // 0 = neither, 1 = O, 2 = X
      winLine: [] // 3 indexes to winning line's squares
    };
    this.winLines = [
      //rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // columns
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // diagonals
      [0, 4, 8],
      [2, 4, 6]
    ];
    this.handleSquareClick = this.handleSquareClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  };

  detectWinner(){
    // detects winner
    let lineContents = [];
    this.winLines.forEach((lineIndex) => {
      const line = this.state.squareStates[lineIndex[0]] + this.state.squareStates[lineIndex[1]] + this.state.squareStates[lineIndex[2]];
      lineContents.push(line);
    })
    let winForO = lineContents.findIndex((item) => {
      return item === "OOO";
    });
    let winForX = lineContents.findIndex((item) => {
      return item === "XXX";
    })
    let draw = lineContents.findIndex((item) => {
      // if this is never true (returns -1) then we have a draw
      // to reproduce, play cells 6,8,9,0,1,2,3,4,5 in that order
      return item.indexOf(" ")>-1;
    })

    if (winForO > -1) {
      let winLine = this.winLines[winForO];
      this.setState({
        winner : "Player 1 (O) Wins!",
        winnerNumber: 1,
        winLine: winLine
      })
    }
    else if (winForX > -1 ) {
      let winLine = this.winLines[winForX];
      this.setState({
        winner : "Player 2 (X) Wins!",
        winnerNumber: 2,
        winLine: winLine
      })
    }
    else if (draw === -1) {
      this.setState({
        winner : "Draw!",
        winnerNumber: 0,
        winLine: []
      })
    }
  }

  handleResetClick() {
    // reset the board
    this.setState({
      squareStates : [' ',' ',' ',' ',' ',' ',' ',' ',' '],
      currentPlayer : 1, // 1 (O) or 2 (X)
      winner : "Game reset", // text about winner
      winnerNumber: 0, // 0 = neither, 1 = O, 2 = X
      winLine: [] // 3 indexes to winning line's squares
    });
  }

  handleSquareClick(squareIndex) {
    console.log(`Square ${squareIndex} clicked`);
    const selectedSquare = this.state.squareStates[squareIndex];
    if (selectedSquare !== ' ') {
      // can only click on empty cells
      return
    }
    if (this.state.winnerNumber !== 0) {
      // can't click once game over (refresh page to play again)
      return;
    }
    let gameSymbol = "";
    if (this.state.currentPlayer !== 1) {
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
        <GameInfo
           message={this.state.currentPlayer}
           winner={this.state.winner}
        />
        <Reset
            onButtonClick={this.handleResetClick}
        />
        <Board
            onSquareClick={this.handleSquareClick}
            squareStates={this.state.squareStates}
            winner={this.state.winnerNumber}
            winLine={this.state.winLine}
        />

      </div>
    )
  }


};

export default GameContainer;
