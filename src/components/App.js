import React from 'react';
import Form from './Form';

const App = props => {
  return (
    <div className="row">
      <div className="small-12 columns">
        <Form />
      </div>
    </div>
  )
};

export default App;

// overall form -- stateful! accepted & rejected states.
// addressee field -- child of overall form
// letter -- child of overall form
