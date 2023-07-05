const Todooutput = (props) => {
  const {todos, completeTodo, deleteTodo} = props

  return ( 
    <div className='rounded-ss  border-yellow-500 p-1'>
    {
      todos.map(todo => (
        <div
          key={todo.id}
          className={`flex
          justify-between
          border
          p-2
          ${todo.completed ? 'border-green-500' : 'border-yellow-500'}
          my-1
          rounded-lg`}
          > 
          <div className='flex gap-2.5 text-center items-center justify-center '>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => completeTodo(todo.id)}
              className='border'
            />
            <p className='text-lg p-0'>{todo.text}</p>
          </div>

          <button
            className='p-1
            w-8
            flex
            justify-center
            items-center'
            onClick={() => deleteTodo(todo.id)}
          >
            x
          </button>
        </div>
      ))
    }
  </div>
   );
}
 
export default Todooutput;