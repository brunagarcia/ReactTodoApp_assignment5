import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Database

const todosList = [
  {
    title: "Groceries",
    complete: false,
    key: 1
  },
  {
    title: "Walk Dog",
    complete: false,
    key: 2
  },
  {
    title: "Homework",
    complete: false,
    key: 3
  }
];


const doneList = []


ReactDOM.render(
  <App todosList={todosList} doneList={doneList} />,
  document.getElementById("root")
);
registerServiceWorker();
