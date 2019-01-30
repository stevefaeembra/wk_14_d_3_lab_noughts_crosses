import React, {Component} from 'react';

class GameInfo extends Component {

  render() {
    return (
      <h1>Current Player is {this.props.message}</h1>
    )
  }
}

export default GameInfo;
