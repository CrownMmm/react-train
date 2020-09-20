import React, { useState, useCallback, useRef, useEffect, memo } from "react";
import "./App.css";

let idSeq = Date.now();

const Control = memo(function Control(props) {
  const { addTodo } = props;
  const inputRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const newText = inputRef.current.value.trim();
    if (newText.length === 0) {
      return;
    }

    addTodo({
      id: ++idSeq,
      text: newText,
      complete: false,
    });
    inputRef.current.value = "";
  };
  return (
    <div className="control">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="new-todo"
          placeholder="hello"
          ref={inputRef}
        />
      </form>
    </div>
  );
});

const Todos = memo(function Todos(props) {
  const { todos, toggleTodo, removeTodo } = props;

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            toggleTodo={toggleTodo}
            todo={todo}
            removeTodo={removeTodo}
          />
        );
      })}
    </ul>
  );
});

const TodoItem = memo(function TodoItem(props) {
  const {
    todo: { id, text, complete },
    toggleTodo,
    removeTodo,
  } = props;
  const onChange = () => {
    toggleTodo(id);
  };
  const onRemove = () => {
    removeTodo(id);
  };

  return (
    <li className="todo-item">
      <input type="checkbox" onChange={onChange} checked={complete} />
      <label className={complete ? "complete" : ""}>{text}</label>
      <button onClick={onRemove}>&#xd7;</button>
    </li>
  );
});

const LS_KEY = "$todo_key";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodo = useCallback((todo) => {
    setTodos((todos) => [...todos, todo]);
  }, []);
  const removeTodo = useCallback((id) => {
    setTodos((todos) =>
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  }, []);
  const toggleTodo = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        return todo.id === id
          ? {
              ...todo,
              complete: !todo.complete,
            }
          : todo;
      })
    );
  }, []);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem(LS_KEY) || "[]");
    setTodos(todos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo-list">
      <Control addTodo={addTodo} />

      <Todos removeTodo={removeTodo} toggleTodo={toggleTodo} todos={todos} />
    </div>
  );
}
