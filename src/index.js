import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';

const toDos = ["Eat", "Sleep", "Game", "Repeat"]

ReactDOM.render(
  <MyList theList={toDos} />,
  document.getElementById('root')
)
