import React, { useState, Component, useMemo, memo, useCallback } from "react";
import "./App.css";

const Counter = memo(function Counter(props) {
  console.log("Counter render");
  return <h1 onClick={props.onClick}>{props.count}</h1>;
});

function App(props) {
  const [count, setCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const double = useMemo(() => {
    return count * 2;
  }, [count === 3]);

  const onClick = useCallback(() => {
    console.log("Click");
    setClickCount((clickCount) => clickCount + 1);
  }, []);

  //useMemo(()=> fn) 返回一个函数
  //useCallback(fn)  等同于上面
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        double:({double}), count:({count})
      </button>
      <Counter count={double} onClick={onClick} />
    </div>
  );
}
export default App;
