import React, {Component} from 'react';

class Square extends Component {

  render() {
    return (
      <div className="square" id={this.props.squareIndex}>{this.props.squareSymbol}</div>
    )
  }
}

export default Square;
