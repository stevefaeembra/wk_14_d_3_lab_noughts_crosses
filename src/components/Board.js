import React, {Component} from 'react';
import Square from './Square.js';

class Board extends Component {

  render(){

    let squaresArray = [];
    for(let squareIndex = 0; squareIndex < 9 ; squareIndex += 1){
      let squareSymbol = this.props.squareStates[squareIndex];
      let isWinner = false;
      if (this.props.winner === 1 && squareSymbol==="O") {
        isWinner = true;
      };
      if (this.props.winner === 2 && squareSymbol==="X") {
        isWinner = true;
      };
      let square = <Square
        squareIndex={squareIndex}
        squareSymbol={squareSymbol}
        key={squareIndex}
        isWinner={isWinner}
        onSquareClick={this.props.onSquareClick}
      />;
      squaresArray.push(square);
    }
    return (
      <div className="squares">{squaresArray}</div>
    )
  }

}

export default Board;
