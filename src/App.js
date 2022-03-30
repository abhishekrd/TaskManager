import React, { useState , useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import InputTodo from './Components/InputTodo';
import { TodoList } from './Components/TodoList';

function App() {
  const [input, changeInput] = useState("")
  const [todos, updateTodo] = useState([])

 
  useEffect(() => {
    localReceive();
  },[])
 
  const localSave = React.useCallback(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);
  
  useEffect(() => {
    localSave();
  },[localSave])

  
  const localReceive = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos",JSON.stringify([]));
    }
    else{
      let getLocal = JSON.parse(localStorage.getItem("todos"));
      updateTodo(getLocal);
}
  };
  return (
    <div className="App">
     
       <Header />
       <h2 className="live-text">{input}</h2>
       <InputTodo changeInput = {changeInput} input = {input} todo = {todos} updateTodo = {updateTodo}/>
       <TodoList todos = {todos} updateTodo = {updateTodo}/>
    </div>
  );
}

export default App;
