const Todoinput = (props) => {
  return ( 
     <div className='rounded-ss  border-yellow-500 p-1 flex gap-2 mb-1'>
        <input placeholder='Add todo...' className='rounded-ss border border-yellow-500 p-2' type="text"
        value={props.task}
        onChange={props.handleChange}
        />

        <button className='rounded-ss border border-yellow-500' onClick={() => props.addTodo()}>Add Item</button>
      </div>
    
   );
}
 
export default Todoinput;