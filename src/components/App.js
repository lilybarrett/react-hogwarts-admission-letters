import React from 'react';
import Form from './Form';
import Letter from './Letter';

const App = props => {
  return (
    <div className="row">
      <div>
        <Form
        />
      </div>
    </div>
  )
};

export default App;

// overall form -- stateful! accepted & rejected states.
// addressee field -- child of overall form
// letter -- child of overall form
