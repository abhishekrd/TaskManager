import React from 'react'

 const TodoItem = ({text, updateTodo,todos, todo}) => {
     const deleteEvent = () => {
      updateTodo(todos.filter((el) => el.id !== todo.id))
     }
    const completeEvent = () => {
        updateTodo(todos.map((member) =>{
            if (member.id === todo.id) {
                return {
                    ...member, completed: !member.completed,
                }
            };
            return member;
        }
        ))
    }
    return (
        <div>
            <>
            <div className="bigcontainer">
            <div className="list-container">
            <div id="list-item" className={`${todo.completed ? "completed" : ""}`}>
             {text}
            </div>
            <button className="complete-btn" onClick={completeEvent}><ion-icon name="checkmark-outline"></ion-icon></button>
            <button className="delete-btn" onClick={deleteEvent}><ion-icon name="close-outline"></ion-icon></button>
            </div>
            </div>
        </>
        </div>
    )
}
export default TodoItem