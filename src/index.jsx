import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
