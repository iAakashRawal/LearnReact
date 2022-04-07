import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Hollywood from './components/myMovies/Hollywood';
import App from './App';
import reportWebVitals from './reportWebVitals';
// //import Mya from '.Hooks/CreateContext/Mya'
// import Data from './components/Data'
// import Home from './Hooks/Location/Home';


ReactDOM.render(
  <React.StrictMode>
    <Hollywood />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
