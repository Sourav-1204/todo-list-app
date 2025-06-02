import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import EditForm from "./editform";

function TodoList({
  listItem,
  handleDelete,
  handleIsEdit,
  handlelulu,
  handlEnterPress,
}) {
  const [completed, setCompleted] = useState(false);
  return (
    <li key={listItem.id}>
      {listItem.isEditing ? (
        <EditForm listItem={listItem} handlelulu={handlelulu} handlEnterPress={handlEnterPress} />
      ) : (
        <>
          <p
            className={`${completed ? "taskcompleted" : ""}`}
            onClick={() => setCompleted(!completed)}
          >
            {listItem.text}
          </p>
          <span className="icon-container">
            <FaEdit id="editicon" onClick={() => handleIsEdit(listItem.id)} />
            <MdDelete id="deleteicon" onClick={() => handleDelete(listItem.id)} />
          </span>
        </>
      )}
    </li>
  );
}

export default TodoList;
