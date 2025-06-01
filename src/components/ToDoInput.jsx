import React, { useEffect, useState } from "react";
import "./todolist.css";
import TodoList from "./todolist";
import { nanoid } from "nanoid";

const localKey = "todoArrayList";

const initalTodoList = {
  todoList:
    localStorage.getItem(localKey) !== null
      ? JSON.parse(localStorage.getItem(localKey))
      : [],
};
function ToDoInput() {
  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState(initalTodoList.todoList);

  function handleAddToDoList(inputText) {
    if (inputText !== "") {
      setTodo([
        ...todo,
        {
          id: nanoid(),
          text: inputText,
          isEditing: false,
        },
      ]);
    }
    setInputText("");
  }

  function handleDelete(key) {
    setTodo(todo.filter((todoItem) => todoItem.id !== key));
  }

  function handlEnterPress(e) {
    if (e.keyCode === 13 && e.target.value !== "") {
      setTodo([
        ...todo,
        { id: nanoid(), text: e.target.value, isEditing: false },
      ]);
      setInputText("");
    }
  }

  function handleIsEdit(key) {
    setTodo(
      todo.map((item) =>
        item.id === key ? { ...item, isEditing: !item.isEditing } : item
      )
    );
  }

  function handlelulu(key, text) {
    if (text !== "") {
      setTodo(
        todo.map((item) =>
          item.id === key ? { ...item, text, isEditing: !item.isEditing } : item
        )
      );
    } else {
      setTodo(
        todo.map((item) =>
          item.id === key ? { ...item, isEditing: !item.isEditing } : item
        )
      );
    }
  }

  useEffect(() => {
    localStorage.setItem(localKey, JSON.stringify(todo));
  }, [todo]);

  return (
    <div className="to-do-list-container">
      <h1>To Do List App</h1>
      <div className="input-container">
        <input
          type="text"
          name="inputText"
          placeholder="Enter your todo..."
          value={inputText}
          onChange={(e) => {
            e.preventDefault();
            setInputText(e.target.value);
          }}
          onKeyDown={handlEnterPress}
        />
        <button onClick={() => handleAddToDoList(inputText)}>Save</button>
      </div>
      <ul className="todo-list-render">
        {todo && todo.length > 0
          ? todo.map((listItem) => {
              return (
                <TodoList
                  listItem={listItem}
                  key={listItem.id}
                  handlelulu={handlelulu}
                  handleDelete={handleDelete}
                  handleIsEdit={handleIsEdit}
                />
              );
            })
          : null}
        <button onClick={() => setTodo([])}>Clear</button>
      </ul>
    </div>
  );
}

export default ToDoInput;
