import React, {Component, Fragment} from 'react';

class Reset extends Component {

  render() {
    return (
      <div className="reset">
        <form>
          <input className="resetbutton" type="button" text="Reset" value="Reset"
            onClick={this.props.onButtonClick}
          />
        </form>
      </div>
    )
  }
}

export default Reset;
