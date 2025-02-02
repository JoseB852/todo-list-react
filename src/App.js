import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("")
  const [todos, setTodos] = useState([]);
  return (
    <div className='container'>
      <h1>My Todos</h1>
      <ul>
        <li>
          <input type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyPress={(e) => {
              if (e.key === "Enter"){
                setTodos(todos.concat(inputValue));
                setInputValue("");
              }
            }}
            placeholder='what do you need to do'></input>
            </li>        
          {todos.map((item, index) =>(
          <li>   
          {item}<i className="fa-solid fa-trash-arrow-up"
          onClick={()=>setTodos(todos.filter((t, currentIndex) => index != currentIndex))}></i>
          
          </li>))}
        <div>{todos.length} task</div>
      </ul>

    </div>


  );



};



export default App;
