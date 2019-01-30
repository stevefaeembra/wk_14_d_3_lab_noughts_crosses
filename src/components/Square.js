import React, {Component} from 'react';

class Square extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };



  handleClick(event) {
    console.log("In handleClick()");
    const target = event.target.currentTarget;
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
