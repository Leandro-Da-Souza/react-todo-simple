import React from 'react'
import '../styles/Todo.css'

const Todo = ({todo, setTodos, todos}) => {

    const isCompleted = (todo) =>{
        if(todo.completed) {
            return (<i className="far fa-check-square"></i>
            )
        } else {
            return (
                <i className="far fa-square"></i>
            )
        } 
    }

    const lineThrough = () => {
        return todo.completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'}
    }

    const toggle = (id) => {
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        }))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    return (
        <div className='todo'>
            <h2 style={lineThrough()}>{todo.title}</h2>
            <button onClick={() => {toggle(todo.id)}}>{isCompleted(todo)}</button>
            <button onClick={() => {deleteTodo(todo.id)}}>X</button>
        </div>
    )
}

export default Todo

