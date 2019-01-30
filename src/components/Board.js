import React, {Component} from 'react';

class Board extends Component {

  render(){
    let squaresArray = [];
    for(let squareIndex = 0; squareIndex < 9 ; squareIndex += 1){
      let squareSymbol = this.props.squareStates[squareIndex];
      let square = <div>I am square {squareIndex} and my value is {squareSymbol}</div>;
      squaresArray.push(square);
    }
    return (
      <div className="square">{squaresArray}</div>
    )
  }

}

export default Board;
