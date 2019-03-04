import React from 'react';
import ReactDOM from 'react-dom';
import AuthPage from './auth/components/auth-page/auth-page';

import './reset.css';

const App = () => {
  return <AuthPage />;
};

ReactDOM.render(<App />, document.getElementById('root'));
