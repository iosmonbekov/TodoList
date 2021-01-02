import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Form from "./components/Form";
import Task from "./components/Task";
import { addToList } from "./store/action";
import "./App.css";

const App = () => {
  const list = useSelector((state) => state.list);

  const dispatch = useDispatch();

  const add = (input) => {
    dispatch(addToList(input));
  };

  return (
    <div className="container">
      <Form click={add} />

      <ul className="list-group">
        {!list.length
          ? "There is no Tasks yet..."
          : list.map((el, index) => {
              return <Task text={el} key={index} id={index} />;
            })}
      </ul>
    </div>
  );
};

export default App;
