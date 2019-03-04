import React from 'react';
import ReactDOM from 'react-dom';
import Auth from './auth/containers/auth';

import "./reset.css";

const App = () => {
  return (
    <div>
      <Auth />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
