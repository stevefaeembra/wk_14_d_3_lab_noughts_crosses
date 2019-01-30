import React, {Component, Fragment} from 'react';

class GameInfo extends Component {

  render() {
    return (
      <Fragment>
        <h1>Current Player {this.props.message}</h1>
        <h2>{this.props.winner}</h2>
      </Fragment>
    )
  }
}

export default GameInfo;
