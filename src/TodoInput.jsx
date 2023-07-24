const Todoinput = (props) => {
  return (
    <div className="rounded-ss  border-yellow-500 p-1 flex gap-2 mb-1">
      <input
        type="text"
        value={props.task}
        placeholder="Add todo..."
        className="rounded-sx border border-yellow-500 p-2"
        onKeyUp={(e) => props.handleChange(e)}
        onChange={(e) => props.handleChange(e)}
      />

      <button
        className="rounded-ss border border-yellow-500"
        onClick={() => props.addTodo()}
      >
        Add Item
      </button>
    </div>
  );
};

export default Todoinput;
