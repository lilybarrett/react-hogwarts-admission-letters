import React from 'react';
import ReactDOM from 'react';
import Letter from './Letter';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accepted: true,
      adressee: null
    };

    this.handleAccepted = this.handleAccepted.bind(this);
    this.handleRejected = this.handleRejected.bind(this);
    this.assignAdressee = this.assignAdressee.bind(this);
  }

  handleAccepted(event) {
    this.setState({accepted: true})
  }

  handleRejected(event) {
    this.setState({accepted: false})
  }

  assignAdressee(event) {
    if (event.target.value === null) {
      debugger;
      this.setState({adressee: "Adressee"})
    } else {
      debugger;
      this.setState({adressee: event.target.value})
    }
  }

  render() {
    return(
      <div className = "form">
        <div className = "row">
          <div className = "small-4 columns">
            <input type="text" onChange={this.assignAdressee}/>
          </div>
          <div className = "small-4 columns">
            <button onClick={this.handleAccepted}>Accepted</button>
            <button onClick={this.handleRejected}>Rejected</button>
          </div>
        </div>
        <div className = "row">
          <div className= "small-8 columns">
            <Letter
              stateBoolean = {this.state.accepted}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Form;
