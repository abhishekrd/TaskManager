import React from 'react'
import TodoItem from './TodoItem'

export const TodoList = ({todos, updateTodo}) => {
    return (
        <div>
            <ul>
                {todos.map((todo) => 
                
                <TodoItem text = {todo.text} updateTodo = {updateTodo} todos = {todos} todo={todo}
                key = {todo.id}/>
                )}
            </ul>
        </div>
    )
}
