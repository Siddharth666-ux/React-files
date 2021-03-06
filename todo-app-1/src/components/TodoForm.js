import React, { useState } from "react";

function TodoForm(props) {
  const [input, setinput] = useState(" ");

  const handleChange = (e) => {
    setinput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });
    setinput("");
  };

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a Task"
          value={input}
          onChange={handleChange}
        />
        <button className="todo-button"> Add Todo</button>
      </form>
    </div>
  );
}

export default TodoForm;
