import React from 'react'


 const InputTodo = ({ changeInput, input, todo, updateTodo }) => {
    const inputEvent = (e) => {
       
     changeInput(e.target.value);
    };
    const submitHandler = (e) => {
        if(input === ""){
          return  window.alert("Please enter Task before Adding it")
        }
        e.preventDefault();
        changeInput("")
        updateTodo([
            ...todo,{
                text: input ,complete: false, id: Math.random() * 1000
            }
        ])
    }
    return (
        <div>
            <form>
                <input onChange={inputEvent} type="text" className="inputtodo" value={input} placeholder="Add your upcoming task here" required></input>
                <button className="taskadd" onClick={submitHandler}>+</button>
            </form>
        </div>
    )
}
export default InputTodo
