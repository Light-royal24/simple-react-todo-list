import { useEffect, useState } from "react";

const TodoItem = (props) => {
  const { todo, completeTodo, deleteTodo, updateTodo, completed} = props;

  const [text, setText] = useState("");
  const [editing, setEditing] = useState(false);
  const [pickingDate, setPickingDate] = useState(false)
  const [date, setdate] = useState([])


  useEffect(() => {
    setText(todo.text)
  }, [])

  const handleUpdate = () => {
    updateTodo(todo.id, {text})
    setEditing(false)
    setPickingDate(false)
  }

  const handleSetEditing = () => {
    setEditing(!editing)
    setPickingDate(false)
  }

  return (
    <div className="rounded-ss p-1">
      <div
        key={todo.id}
        className={`block
          justify-between
          border
          p-2
          ${todo.completed ? "border-green-500 text-green-500 line-through" : "border-yellow-500"}
          my-1
          rounded-lg`}
      >
        <div className="flex gap-2.5 text-center items-center justify-between ">
        <div className="flex gap-2.5 text-center items-center justify-center ">
        {
          todo.completed ? (
            ''
          ) : (
          <button className="px-1 bg-gray-700 text-white border py-0" onClick={() => handleSetEditing()}>
            <ion-icon name="create"></ion-icon>
          </button>
          )
        }

        
          {editing ? (
            // <p className="text-lg p-0">EDITING</p>
            <input
              className="p-2 text-sm border border-gray-800 rounded-md"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
          ) : (
            <>
              <input
                type="checkbox"
                className="border"
                checked={todo.completed}
                onChange={() => completeTodo(todo.id, {completed})}
              />
              <p className="text-lg p-0">{todo.text}</p>
            </>
          )}
        </div>


        {editing ? (
          <>
           <button className="p-1 bg-green-700 text-white border"
            onClick={() => setPickingDate(!pickingDate)}
           >
           <ion-icon name="calendar"></ion-icon>
          </button>

          <button className="p-1 bg-green-700 text-white border" onClick={handleUpdate}>
            <ion-icon name="checkmark"></ion-icon>
          </button>
          </>
        ) : (
          <button
            className="p-1
              w-8
              flex
              justify-center
              items-center"
            onClick={() => deleteTodo(todo.id)}
          >
            x
          </button>
        )}
        </div>

        <div>
          {
           pickingDate ? (
            <div className='block'>
            <div className='rounded-lg border border-yellow-500 p-1 m-2 flex gap-2.5 items-center justify-center'>
              <div>
                <h2>Add a Dew Date</h2>
                <input type="date" value={date} onChange={(e) => setdate(e.target.value)} className='border border-gray-500 rounded-lg'/>
              </div>
              <div>
                <button
                  onClick={() => props.updateTodo(todo.id, {date})}
                  className="p-1 bg-gray-400 text-white border" >
                  <ion-icon name="checkmark"></ion-icon>
                </button>
              </div>
            </div>
            <p>{todo.date}</p>
          </div>
            ) : ''
          }
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
