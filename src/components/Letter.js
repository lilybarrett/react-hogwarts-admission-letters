import React from 'react';

const Letter = props => {
  let stateBoolean = props.accepted;

  if (props.stateBoolean) {
    return (
      <div className="row">
        <div className="small-12 columns">
          Hi
        </div>
      </div>
    )
  } else {
    return (
      <div className="row">
        <div className="small-12 columns">
          Woohoo
        </div>
      </div>
    )
  }
};

export default Letter;
