import React, { useState } from "react";
import edit from "../img/edit.svg";

const Form = (props) => {
  const [input, setInput] = useState("");

  const onClickHandler = () => {
    props.click(input);
    setInput("");
  };

  const editTask = () => {
    props.editTask(input);
    setInput("");
  };

  return (
    <>
      {props.flag ? (
        <div className="input-group mb-3">
          <input
            className="form-control"
            placeholder="Edit this task..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button className="btn btn-warning danger" onClick={editTask}>
            <img src={edit} alt="" />
          </button>
        </div>
      ) : (
        <div className="input-group mb-3 main_input">
          <input
            className="form-control"
            placeholder="Enter some task please..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button className="btn btn-secondary" onClick={onClickHandler}>
            Add
          </button>
        </div>
      )}
    </>
  );
};

export default Form;
