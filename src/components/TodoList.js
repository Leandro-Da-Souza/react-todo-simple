import React from 'react'
import Todo from './Todo.js'

const TodoList = ({todos, setTodos}) => {
    console.log()

    return (
        <div>
            {todos.map(todo => (
                <Todo todo={todo} key={todo.id} setTodos={setTodos} todos={todos}/>
            ))}
        </div>
    )
}

export default TodoList
