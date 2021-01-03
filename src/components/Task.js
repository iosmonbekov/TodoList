import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTaskToList } from "../store/action";
import edit from "../img/edit.svg";
import bin from "../img/delete.png";
import Form from "./Form";

export default function Task(props) {
  const list = useSelector((state) => state.list);
  const [flag, setFlag] = useState(false);

  const dispatch = useDispatch();

  const removeTask = (index) => {
    const copy = [...list];
    copy.splice(index, 1);
    dispatch(deleteTask(copy));
  };

  const editTask = (input) => {
    if (input) {
      const copy = [...list];
      copy.splice(props.id, 1, input);
      dispatch(editTaskToList(copy));
      setFlag(false);
    } else {
      setFlag(false);
    }
  };

  return flag ? (
    <Form flag={true} id={props.id} editTask={editTask} />
  ) : (
    <li className="list-group-item mb-2 task">
      <div>{props.text}</div>
      <div>
        <button
          className="btn btn-warning danger"
          onClick={() => setFlag(true)}
        >
          <img src={edit} alt="" />
        </button>
        <button
          className="btn btn-danger danger"
          onClick={() => removeTask(props.id)}
        >
          <img src={bin} alt="" />
        </button>
      </div>
    </li>
  );
}
