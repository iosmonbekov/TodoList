import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../store/action";

export default function Task(props) {
  const list = useSelector((state) => state.list);

  const dispatch = useDispatch();

  const removeTask = (index) => {
    const copy = [...list];
    copy.splice(index, 1);
    dispatch(deleteTask(copy));
  };

  return (
    <li className="list-group-item mb-2 task">
      <div>{props.text}</div>
      <div>
        <button className="btn btn-danger" onClick={() => removeTask(props.id)}>
          &times;
        </button>
      </div>
    </li>
  );
}
