import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function App() {
  const [error, setError] = useState("");
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    axios
      .get("http://localhost:3000/todos")
      .then(function (res) {
        setTodos(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  // When the app loads run the fetchTodos function
  useEffect(fetchTodos, []);

  const addTodo = () => {
    axios
      .post("http://localhost:3000/todos", {
        text: task,
      })
      .then(function (res) {
        setTodos(res.data);
        setError('')
        setTask("");
      })
      .catch(function (err) {
        const {response} = err
        setError(response.data)
      });
    };
    
  const completeTodo = (todoId, completed) => {
    axios
    .put(`http://localhost:3000/todos/${todoId}`, {completed}) 
    .then(function (res) {
      setTodos(res.data);
    })
    .catch(function (err) {
      console.log(err);
    });
  };

  const deleteTodo = (todoId) => {
    axios
      .delete(`http://localhost:3000/todos/${todoId}`)
      .then(function (res) {
        setTodos(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const updateTodo = (todoId, update) => {
    axios
      .put(`http://localhost:3000/todos/${todoId}`, update)
      .then(function (res) {
        setTodos(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    if (e.keyCode === 13) {
      addTodo();
      return;
    }

    setTask(e.target.value);
  };

  const updateDate = (todoId, date) => {
    axios
      .put(`http://localhost:3000/todos/${todoId}`, {date}) 
      .then(function (res) {
        setTodos(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <>
      <div className="text-left text-red-600 text-xs font-bold">
        {error}
      </div>
      <div className="border border-gray-400 rounded-lg p-2">
        <div  className="border border-gray-400 rounded-lg mb-2">
          <TodoInput task={task} addTodo={addTodo} handleChange={handleChange} />
        </div>

        {todos.length != 0 ? (
            <div  className="border border-gray-400 rounded-lg">
              {
                todos.map(todo => (
                  <div key={todo.id}>
                    <TodoItem
                      todo={todo}
                      key={todo.id}
                      deleteTodo={deleteTodo}
                      updateTodo={updateTodo}
                      completeTodo={completeTodo} 
                      updateDate={updateDate} 
                      completed={todo.completed} 
                    />        
                  </div>
                  ))}
              </div>
        ): (
              <div  className="border border-gray-400 rounded-lg p-2">
                <p className="text-green-700">Add Your First Task</p>
              </div>
             
        )}
      </div>
    </>
  );
}

export default App;
