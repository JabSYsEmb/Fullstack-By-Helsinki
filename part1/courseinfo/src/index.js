import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import exporter from './App';
import reportWebVitals from './reportWebVitals';

const App = exporter.App;

let counter=1;

const refresh = () => ReactDOM.render(
  <App counter={counter}/>,
  document.getElementById('root'),
);
counter += 3
refresh()
counter += 1
refresh()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
