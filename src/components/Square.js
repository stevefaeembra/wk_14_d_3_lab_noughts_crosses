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
    let id = `cell_${this.props.squareIndex}`;
    let classes = `square player_1`;
    if (this.props.isWinner) {
      //debugger;
      classes = classes + " winner";
    }
    return (
      <div className={classes}
        onClick={this.handleClick}
        id={id}
      >
        {this.props.squareSymbol}
      </div>
    )
  }



}

export default Square;
