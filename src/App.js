import React, { useState } from 'react';
import './style.css';

import ToDoList from './components/ToDoList';

export default function App() {
  const [text, setText] = useState('');

  const [inputval, setInputval] = useState([]);

  function inputHandler(e) {
    setText(e.target.value);
  }

  function submitHandler() {
    setInputval((olditems) => {
      return [...olditems, text];
    });
    return setText(' ');
  }

  function deleteHandler(id) {
    setInputval((olditems) => {
      return olditems.filter((arr, index) => {
        return index != id;
      });
    });
  }

  return (
    <div className="App">
      <h1>Taskify!</h1>

      <div className="second">
        <input
          type="text"
          className="inputField"
          onChange={inputHandler}
          value={text}
          placeholder="enter your text"
        />
        <button type="submit" className="submitbutton" onClick={submitHandler}>
          Add
        </button>
      </div>

      <div className="listItems">
        <ol>
          {inputval.map((val, index) => {
            return (
              <ToDoList
                key={index}
                id={index}
                text={val}
                onSelect={deleteHandler}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}
