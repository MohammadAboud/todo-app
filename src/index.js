import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Todo from './components/Todo'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
