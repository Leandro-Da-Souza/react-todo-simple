import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  return (
    <div className="App">
      <Header/>
      <Form input={input} setInput={setInput} setTodos={setTodos} todos={todos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
