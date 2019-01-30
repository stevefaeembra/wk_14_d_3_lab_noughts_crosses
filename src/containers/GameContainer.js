import React, {Component} from 'react';

class GameContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      squareStates : [' ',' ',' ',' ',' ',' ',' ',' ',' '],
      nextPlayer : 1
    };
  };

  render() {
    return (
      <div className="gameContainer">
        <GameInfo />
      </div>
    )
  }

};

export default GameContainer;
