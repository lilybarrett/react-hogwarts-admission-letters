import React from 'react';
import ReactDOM from 'react';
import Letter from './Letter';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accepted: true
    };

    this.handleAccepted = this.handleAccepted.bind(this);
  }

  handleAccepted(event) {
    if(this.state.accepted) {
      this.setState({accepted: false})
    } else {
      this.setState({accepted: true})
    }
  }

  render() {
    return(
      <div className = "row">
        <div className = "small-12 columns">
          <button onClick={this.handleAccepted}>Accepted</button>
          <button onClick={this.handleAccepted}>Rejected</button>
          {this.state.accepted}
          <Letter
            stateBoolean = {this.state.accepted}
          />
        </div>
      </div>
    );
  }
};

export default Form;
