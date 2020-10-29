import React from 'react'
import '../styles/Form.css'

const Form = ({input, setInput, setTodos, todos}) => {
    const addTodo = (e) => {
        e.preventDefault()
        const newTodo = {
            id: Math.random() * 1000,
            title: input,
            completed: false
        }
        setTodos([...todos, newTodo])
        setInput('')
    }

    return (
        <form className="form-control">
            <section className="form-group">
                <label htmlFor="todo">What Do You Want Todo?</label>
                <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}}/>
                <button type="submit" onClick={(e) => addTodo(e)}>Add Todo</button>
            </section>
        </form>
    )
}

export default Form
