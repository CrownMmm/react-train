import React, { useState, useCallback, useRef, useEffect, memo } from "react";
import "./App.css";
import { createAdd, createRemove, createSet, createToggle } from "./actions";
import reducer from "./reducers";

function bindActionCreators(actionCreators, dispatch) {
  const ret = {};

  for (const key in actionCreators) {
    ret[key] = function (...args) {
      const actionCreator = actionCreators[key];
      const action = actionCreator(...args);
      dispatch(action);
    };
  }

  return ret;
}

const Control = memo(function Control(props) {
  const { addTodo } = props;
  const inputRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const newText = inputRef.current.value.trim();
    if (newText.length === 0) {
      return;
    }

    // addTodo({
    //   id: ++idSeq,
    //   text: newText,
    //   complete: false,
    // });
    addTodo(newText);
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
  const { todos, removeTodo, toggleTodo } = props;
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            todo={todo}
          />
        );
      })}
    </ul>
  );
});

const TodoItem = memo(function TodoItem(props) {
  const {
    todo: { id, text, complete },
    removeTodo,
    toggleTodo,
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
let store = {
  todos: [],
  incrementCount: 0,
};

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [incrementCount, setIncrementCount] = useState(0);

  useEffect(() => {
    Object.assign(store, {
      todos,
      incrementCount,
    });
  }, [todos,incrementCount]);

  const dispatch =
    (action) => {
      const state = {
        todos,
        incrementCount,
      };
      const setters = {
        todos: setTodos,
        incrementCount: setIncrementCount,
      };

      if ("function" === typeof action) {
        action(dispatch, () => store);
        return;
      }

      const newState = reducer(store, action);

      for (let key in newState) {
        setters[key](newState[key]);
      }
    }
  

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem(LS_KEY) || "[]");
    setTodos(todos);
    dispatch(createSet(todos));
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo-list">
      <Control
        {...bindActionCreators(
          {
            addTodo: createAdd,
          },
          dispatch
        )}
      />

      <Todos
        {...bindActionCreators(
          {
            removeTodo: createRemove,
            toggleTodo: createToggle,
          },
          dispatch
        )}
        todos={todos}
      />
    </div>
  );
}
