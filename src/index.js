import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Database

const todosList = [
  {
    title: "Groceris",
    complete: false
  },
  {
    title: "Walk Dog",
    complete: false
  },
  {
    title: "Homework",
    complete: false
  }
];



ReactDOM.render(

<App todosList={todosList} />,
 document.getElementById('root'));
registerServiceWorker();
