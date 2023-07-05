import { useState } from 'react'
import './App.css'

import TodoInput from './TodoInput'
import Todooutput from './TodoOutPut'

function App() {

  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])

  const handleChange = (e) => {
    setTask(e.target.value); 
  };
  
  const addTodo = () => {
    const newTodo = {
      text: task,
      id: todos.length + 1,
      completed: false
    }
    
    const addedTodo = todos.concat(newTodo)
    
    if(task != '' ){
      setTodos(addedTodo)
    }
    
    setTask('')
  }

  const completeTodo = (todoId) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        if (todo.completed) {
          todo.completed = false
        } else {
          todo.completed = true
        }
      }

      return todo
    })

    setTodos(updatedTodos)
  }

  const deleteTodo = (todoId) => {
   const filteredTodo = todos.filter(todo => todo.id !== todoId)

    setTodos(filteredTodo)
  }

  return (
    <>
     <TodoInput task={task} handleChange={handleChange} addTodo={addTodo}/>
     <Todooutput todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App
