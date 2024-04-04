import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/todos', {
      method: "GET"
    })
    .then((res) => res.json()).then((data) => {
      setTodos(data);
    })
  }, [])

  return (
    <>
      {todos.map((todo) => {
        return <div>
          <div id={todo.id}>Title:{" " + todo.title} <br /> Description:{" " +todo.description}</div>
          <br />
        </div>
      })}
    </>
  )
}

export default App
