import React, {Component} from 'react';

class Square extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };



  handleClick(event) {
    this.props.onSquareClick(this.props.squareIndex);
  };

  render() {
    let id = `cell_${this.props.squareIndex}`;
    let classes = `square player_1`;
    let classSymbol = "";
    if (this.props.isWinner) {
      //debugger;
      classSymbol = "winner";
    }
    return (
      <div className={classes}
        onClick={this.handleClick}
        id={id}
      >
        <span className={classSymbol}>
          {this.props.squareSymbol}
        </span>
      </div>
    )
  }



}

export default Square;
