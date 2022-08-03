import React from 'react';

import './ToDoList.css';

export default function ToDoList(props) {


  return (
    <div className="Notes">
      <li>{props.text}</li>

      <button className="dltButton"
      onClick={() => {
        props.onSelect(props.id)
      }}  >Delete</button>
    </div>
  );
}
