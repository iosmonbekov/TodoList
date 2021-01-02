import React, { useState } from "react";

const Form = (props) => {
  const [input, setInput] = useState("");

  const onClickHandler = () => {
    props.click(input);
    setInput("");
  };

  return (
    <div className="input-group mb-3">
      <input
        className="form-control"
        placeholder="Recipient's username"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button className="btn btn-outline-secondary" onClick={onClickHandler}>
        Add
      </button>
    </div>
  );
};

export default Form;
