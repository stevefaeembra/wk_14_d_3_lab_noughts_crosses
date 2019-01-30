import React, {Component} from 'react';

class Square extends Component {

  handleClick(event) {
    console.log("In handleClick()");
    //console.log(this.props.squareIndex);
    this.props.onSquareClick(this.props.squareIndex);
  };

  render() {
    return (
      <div className="square"
        onClick={this.handleClick}
        id={this.props.squareIndex}>
        {this.props.squareSymbol}
      </div>
    )
  }



}

export default Square;
